import { useState } from "react";

import { NextUIProvider, Button } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <div>
        <strong>Counter: {count}</strong>
        <Button onClick={(e) => setCount((prev) => prev + 1)}>+</Button>
      </div>
    </NextUIProvider>
  );
}

export default App;
