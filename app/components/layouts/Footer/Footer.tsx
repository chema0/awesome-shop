import { GitHub, Heart } from "@/components/icons";
import { Text } from "@nextui-org/react";
import { externalLinks } from "external-links";
import { Box } from "../../elements";
import Link from "next/link";
import { Logo } from "../../Logo";

const Footer = () => {
  return (
    <Box
      css={{
        h: "$30",
        borderTop: "1px solid",
        borderTopColor: "$border",
        bgColor: "$accents0",
        p: "$10",
      }}
    >
      <Box css={{ d: "flex", ai: "center", jc: "space-between", mb: "$10" }}>
        <Box css={{ d: "flex", ai: "center", gap: "$8" }}>
          <Logo />
          <Link href={externalLinks.repository} color="text">
            <GitHub />
          </Link>
        </Box>

        <Box css={{ d: "flex", gap: "$8" }}>
          <Link href="/about" color="text">
            About
          </Link>
          <Link href="/contact" color="text">
            Contact
          </Link>
        </Box>
      </Box>

      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text css={{ mr: "0.5rem" }}>Made with </Text>
        <Heart height={12} width={12} />
        <Text css={{ ml: "0.5rem" }}>
          by{" "}
          <a
            href={externalLinks.devsite}
            style={{ textDecoration: "underline" }}
          >
            chema0
          </a>
          .
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
