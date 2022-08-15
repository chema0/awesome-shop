import { useLocation, useNavigate } from "react-router-dom";

import CenteredLayout from "@/components/layouts/CenteredLayout";

import { LoginForm } from "../components";

export const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();

  console.log({ location });

  return (
    <CenteredLayout>
      <LoginForm onSuccess={() => navigate("/app", { replace: true })} />
    </CenteredLayout>
  );
};
