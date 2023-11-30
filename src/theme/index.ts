import { extendTheme } from "@chakra-ui/react";

import { blackAlpha, whiteAlpha } from "./colors/blackAndWhiteAlphas";
import { neAccent, neBlack, neGrey, neWhite } from "./colors/neutral";
import { stError, stProgress, stSuccess, stWarning } from "./colors/status";

const theme = extendTheme({
  colors: {
    stSuccess,
    stProgress,
    stError,
    stWarning,
    neAccent,
    neWhite,
    neGrey,
    neBlack,
    whiteAlpha,
    blackAlpha,
    borderColorLight: "#E2E8F0",
    borderColorDark: "#2D3748",
  },
  semanticTokens: {
    colors: {
      primary: { default: "neWhite.500", _dark: "neGrey.800" },
      danger: { default: "stError.500", _dark: "stError.400" },
      success: { default: "stSuccess.500", _dark: "stSuccess.800" },
      neBorder: { default: "borderColorLight", _dark: "borderColorDark" },
    },
  },
});

export default theme;
