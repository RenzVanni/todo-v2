import { useState } from "react";

interface Color {
  darkC1?: string;
  darkC2?: string;
  darkC3?: string;
  darkC4?: string;
  darkC5?: string;
  darkC6?: string;
  darkC7?: string;
}

const changeTheme = () => {
  const [mode, setMode] = useState<boolean>(true);

  const onMode = () => {
    setMode((prev) => !prev);
  };

  const darkColor: Color = mode
    ? {}
    : {
        darkC1: "hsl(235, 21%, 11%)",
        darkC2: "hsl(235, 24%, 19%)",
        darkC3: "hsl(234, 39%, 85%)",
        darkC4: "hsl(236, 33%, 92%)",
        darkC5: "hsl(234, 11%, 52%)",
        darkC6: "hsl(233, 14%, 35%)",
        darkC7: "hsl(237, 14%, 26%)",
      };

  return { mode, onMode, darkColor };
};

export default changeTheme;
