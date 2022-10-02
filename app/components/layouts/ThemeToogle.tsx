import { CSS, styled } from "@nextui-org/react";

import { Moon, Sun } from "@/components/icons";

import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";

interface Props {
  className?: string;
  css?: CSS;
}

const StyledButton = styled("button", {
  dflex: "center",
  size: "auto",
  cursor: "pointer",
  background: "transparent",
  border: "none",
  padding: 0,
  "& .theme-selector-icon": {
    color: "$colors$accents6",
  },
  "@xsMax": {
    px: "$2",
  },
});

export const ThemeToggle: React.FC<Props> = ({ css }) => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const handleToggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <StyledButton
      aria-label="toggle a light and dark color scheme"
      onClick={handleToggleTheme}
      css={css}
    >
      {isDark ? (
        <Sun filled className="theme-selector-icon" size={20} />
      ) : (
        <Moon filled className="theme-selector-icon" size={20} />
      )}
    </StyledButton>
  );
};
