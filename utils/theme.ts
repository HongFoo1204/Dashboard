import { extendTheme } from "@chakra-ui/react";

const config = {
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors: {
    primary: {
      50: " #efedff",
      100: " #cecaeb",
      200: " #ada9d8",
      300: " #8c86c6",
      400: " #6b64b5",
      500: " #514a9b",
      600: " #3f3a7a",
      700: " #2d2958",
      800: " #1a1938",
      900: " #090719",
    },
  },
};

export const theme = extendTheme(config);
