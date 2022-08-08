import { CSS, styled } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

import { Moon, Sun } from "@/components/icons";

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
  const darkMode = useDarkMode();

  const handleToggleTheme = () => darkMode.toggle();

  return (
    <StyledButton
      aria-label="toggle a light and dark color scheme"
      onClick={handleToggleTheme}
      css={css}
    >
      {darkMode.value ? (
        <Sun filled className="theme-selector-icon" size={20} />
      ) : (
        <Moon filled className="theme-selector-icon" size={20} />
      )}
    </StyledButton>
  );
};
