import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";

import { MainLayoutProps } from "./interfaces/MainLayout.interface";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex>
      <Box width="300px">
        <Flex
          alignItems="center"
          fontWeight="bold"
          gap={2}
          padding={4}
          width="full"
        >
          <Image width="2rem" height="2.5rem" src="icons/logo.svg" />
          <Text>Gestion de Trabajo</Text>
        </Flex>

        {/* sidebar component */}
        <Sidebar />
      </Box>

      <Box width="full">
        {/* Navbar component */}
        <Navbar />
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
