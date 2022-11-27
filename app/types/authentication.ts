import { User } from "next-auth";

export type AuthorizeResult = {
  user: User;
  session: Session;
};

export type Session = {
  access_token: string;
  renewal_token: string;
};
