import React from "react";

// export const THEME_TYPES = {
//   LIGHT: "LIGHT",
//   DARK: "DARK"
// };

// export const themeColor = "darkblue";

// export const COLOR_SCHEME = {
//   [THEME_TYPES.LIGHT]: {
//     foreground: "black",
//     background: "white"
//   },
//   [THEME_TYPES.DARK]: {
//     foreground: "white",
//     background: "black"
//   }
// };

export const ThemeContext = React.createContext(["purple", () => {}]);
