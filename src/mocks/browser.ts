import { RequestHandler, setupWorker } from "msw";

import { handlers as userHandlers } from "@/features/users/mocks/handlers";

const handlers: Array<RequestHandler> = [...userHandlers];

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
