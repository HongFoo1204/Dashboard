"use client";

import { theme } from "@/utils/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
