import { Dropdown, Text, User, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/lib/authorization";

export const UserAccount = () => {
  const { user } = useAuth()!;

  const navigate = useNavigate();

  if (user) {
    return (
      <Dropdown placement="bottom-left">
        <Dropdown.Trigger>
          <User
            bordered
            as="button"
            size="md"
            color="gradient"
            name={user.firstName}
            description={`@${user.username}`}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Dropdown.Trigger>
        <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
          <Dropdown.Item key="profile" css={{ height: "$18" }}>
            <Text b color="inherit" css={{ d: "flex" }}>
              Signed in as
            </Text>
            <Text b color="inherit" css={{ d: "flex" }}>
              {user.email}
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="settings" withDivider>
            My Settings
          </Dropdown.Item>
          <Dropdown.Item key="analytics" withDivider>
            Analytics
          </Dropdown.Item>
          <Dropdown.Item key="system">System</Dropdown.Item>
          <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
          <Dropdown.Item key="help_and_feedback" withDivider>
            Help & Feedback
          </Dropdown.Item>
          <Dropdown.Item key="logout" color="error" withDivider>
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
