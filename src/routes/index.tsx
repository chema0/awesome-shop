import { useRoutes } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import { Landing } from "@/features/misc/routes/Landing";
import { useAuth } from "@/lib/authorization";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = auth!.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  console.log([...routes, ...commonRoutes]);

  return <MainLayout>{element}</MainLayout>;
};
