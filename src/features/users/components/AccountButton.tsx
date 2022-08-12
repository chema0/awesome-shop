import { Button, Link, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { UserIcon } from "@/components/icons";
import { useAuth } from "@/lib/authorization";

export const AccountButton = () => {
  const { user, isLogged } = useAuth();

  const navigate = useNavigate();

  if (isLogged) {
    return (
      <Button
        icon={<UserIcon />}
        css={{ backgroundColor: "$backgroundContrast" }}
      >
        {user.firstName}
      </Button>
    );
  }

  return (
    <Text h4>
      <Link href="#" color="text" onClick={() => navigate("/auth/login")}>
        Account
      </Link>
    </Text>
  );
};
