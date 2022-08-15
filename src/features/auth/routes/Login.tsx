import { useNavigate } from "react-router-dom";

import CenteredLayout from "@/components/layouts/CenteredLayout";

import { LoginForm } from "../components";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <CenteredLayout>
      <LoginForm onSuccess={() => navigate("/")} />
    </CenteredLayout>
  );
};
