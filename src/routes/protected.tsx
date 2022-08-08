import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Loading } from "@nextui-org/react";

import { Dashboard } from "@/features/misc/routes";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Loading size="xl" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      // { path: "/users", element: <Users /> },
      // { path: "/profile", element: <Profile /> },
      { path: "/", element: <Dashboard /> },
      // { path: "*", element: <Navigate to="." /> },
    ],
  },
];
