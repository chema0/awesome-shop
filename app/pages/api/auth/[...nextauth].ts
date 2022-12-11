import { API_URL } from "config";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { decodeJwt } from "lib/jwt";
import { AuthorizeResult, Session } from "lib";

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token: JWT) {
  try {
    const response = await fetch(`${API_URL}/session/renew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token.refreshToken as string,
      },
    });

    const refreshedTokens = (await response.json()) as Session;

    if (!response.ok) {
      throw refreshedTokens;
    }

    delete token.error;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: refreshedTokens.expires_at * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@awesomeshop.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(`${API_URL}/signin`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const result = await res.json();

        console.log({ res, result });

        // If no error and we have user data, return it
        if (res.ok && result) {
          return result;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, credentials }) {
      const isAllowedToSignIn = !!user;

      if (credentials && account) {
        // Set up account data with session info
        const session = (user as AuthorizeResult).session as Session;
        account.access_token = session.access_token;
        account.refresh_token = session.refresh_token;
        account.expires_at = decodeJwt(session.access_token).exp;
      }

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, account, user }) {
      console.log({ account, user });
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at && account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      console.log({ session, token });
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      session.expires = new Date(token.accessTokenExpires).toISOString();

      return session;
    },
  },
};

export default NextAuth(authOptions);
