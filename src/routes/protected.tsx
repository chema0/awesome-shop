import { Loading } from "@nextui-org/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

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
      { path: "/", element: <Dashboard /> },
      // { path: "/users", element: <Users /> },
      // { path: "/profile", element: <Profile /> },
      // { path: "*", element: <Navigate to="." /> },
    ],
  },
];
