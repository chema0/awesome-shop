import { API_URL } from "config";
import type { Adapter } from "next-auth/adapters";

type CreateUserDTO = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
};

const buildError = async (
  res: Response,
  reason = "An error occurred while fetching.."
) => {
  const error = new Error(reason);
  error.message = await res.json();
  error.cause = res.status;
  throw error;
};

function BackendAdapter(): Adapter {
  return {
    async createUser(user) {
      const res = await fetch(`${API_URL}/registration`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        return res.json();
      }

      return buildError(res);
    },
    async getUser(id) {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "GET",
      });

      if (res.ok) {
        return res.json();
      }

      return buildError(res);
    },
    async getUserByEmail(email) {
      const res = await fetch(`${API_URL}/users/${email}`, {
        method: "GET",
      });

      if (res.ok) {
        return res.json();
      }

      return buildError(res);
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return Promise.reject("Not supported yet.");
    },
    async updateUser(user) {
      return Promise.reject("Not supported yet.");
    },
    async linkAccount(account) {
      return;
    },
    async createSession({ sessionToken, userId, expires }) {
      return Promise.reject("Not supported yet.");
    },
    async getSessionAndUser(crendetials) {
      return Promise.reject("Not supported yet.");
    },
    async updateSession({ sessionToken }) {
      return Promise.reject("Not supported yet.");
    },
    async deleteSession(sessionToken) {
      return;
    },
  };
}

export default BackendAdapter;
