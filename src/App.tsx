import { NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";
import { darkTheme, lightTheme } from "./theme/shared";

function App() {
  const darkMode = useDarkMode();

  console.log({ darkTheme });

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </NextUIProvider>
  );
}

export default App;
