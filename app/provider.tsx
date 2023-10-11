"use client";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IChakraUIProviderProps {
  children: ReactNode;
}

const ChakraUIProvider: FC<IChakraUIProviderProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};
export default ChakraUIProvider;
