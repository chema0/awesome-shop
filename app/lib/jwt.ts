import * as jose from "jose";

export const decodeJwt = (token: string) => {
  return jose.decodeJwt(token);
};
