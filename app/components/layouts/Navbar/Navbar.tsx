import {
  Avatar,
  Dropdown,
  Link,
  Navbar as NUINavbar,
  Text,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Logo } from "../../Logo";
import { ThemeToggle } from "../ThemeToogle";
import UserAccount from "./UserAccount";

const Navbar = () => {
  const router = useRouter();

  const collapseItems = useMemo(
    () => ["Home", "Store", "Profile", "Orders", "Logout"],
    []
  );

  const getIsActive = (path: string) => router.asPath === path;

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
        <Link href="/" color="inherit">
          <Text b hideIn="xs">
            Awesome Shop
          </Text>
        </Link>
      </NUINavbar.Brand>
      <NUINavbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        <NUINavbar.Link isActive={getIsActive("/")} href="/">
          Home
        </NUINavbar.Link>
        <NUINavbar.Link isActive={getIsActive("/store")} href="/store">
          Store
        </NUINavbar.Link>
      </NUINavbar.Content>
      <NUINavbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <ThemeToggle />
        <UserAccount />
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

export default Navbar;
