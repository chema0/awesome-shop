// src/mocks/handlers.js
import { RequestHandler, rest } from "msw";

import { User } from "../types";

const mockedUser: User = {
  username: "chema_",
  firstName: "Chema",
  lastName: "Martínez",
  email: "chema@awesome.com",
  role: "ADMIN",
};

const DELAY = 2000;

export const handlers: Array<RequestHandler> = [
  rest.post("/auth/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(mockedUser),
      ctx.delay(DELAY)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(ctx.status(200), ctx.json(mockedUser));
  }),
];
