import { useAuth } from "@/lib/authorization";

export const Dashboard = () => {
  const { user } = useAuth();

  return <main>Dashboard</main>;
};
