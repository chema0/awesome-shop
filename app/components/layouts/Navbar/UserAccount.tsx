import { User } from "@/components/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Link,
  Loading,
  Navbar,
  Text,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";

const UserAccount = () => {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";

  console.log({ session });

  if (isLoading) {
    return <Loading type="gradient" />;
  }

  if (!session) {
    return (
      // <Button
      //   flat
      //   size="sm"
      //   color="default"
      //   icon={<User fill="currentColor" size={20} />}
      //   onClick={() => signIn()}
      // />
      <Link href="#" onClick={() => signIn()} css={{ cursor: "pointer" }}>
        <Avatar squared icon={<User size={20} fill="currentColor" />} />
      </Link>
    );
  }

  return (
    <Dropdown placement="bottom-right">
      <Navbar.Item>
        <Dropdown.Trigger>
          <Avatar
            bordered
            as="button"
            color="default"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </Dropdown.Trigger>
      </Navbar.Item>
      <Dropdown.Menu
        aria-label="User menu actions"
        color="default"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            zoey@example.com
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="configurations" withDivider>
          Profile
        </Dropdown.Item>
        <Dropdown.Item key="analytics">Orders</Dropdown.Item>
        <Dropdown.Item key="logout" withDivider color="error">
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserAccount;
