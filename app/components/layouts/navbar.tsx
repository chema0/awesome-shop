import {
  Avatar,
  Dropdown,
  Link,
  Navbar as NUINavbar,
  Text,
} from "@nextui-org/react";
import { Logo } from "../Logo";

const Navbar = () => {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NUINavbar isBordered variant="sticky" maxWidth={"fluid"}>
      <NUINavbar.Toggle showIn="xs" />
      <NUINavbar.Brand
        css={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Logo />
        <Text b color="inherit" hideIn="xs">
          Awesome Shop
        </Text>
      </NUINavbar.Brand>
      <NUINavbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <NUINavbar.Link href="#">Features</NUINavbar.Link>
        <NUINavbar.Link isActive href="#">
          Customers
        </NUINavbar.Link>
        <NUINavbar.Link href="#">Pricing</NUINavbar.Link>
        <NUINavbar.Link href="#">Company</NUINavbar.Link>
      </NUINavbar.Content>
      <NUINavbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <NUINavbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </NUINavbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
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
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NUINavbar.Content>
      <NUINavbar.Collapse>
        {collapseItems.map((item, index) => (
          <NUINavbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </NUINavbar.CollapseItem>
        ))}
      </NUINavbar.Collapse>
    </NUINavbar>
  );
};

export { Navbar };
