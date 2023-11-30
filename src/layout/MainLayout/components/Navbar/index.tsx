import { memo } from "react";

import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/react";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = memo(() => {
  const { toggleColorMode, colorMode } = useColorMode();

  const iconColorMode = colorMode === "dark" ? <CiLight /> : <MdDarkMode />;

  return (
    <Flex justifyContent="space-between" padding={4}>
      <Button as={IconButton} icon={<RxHamburgerMenu />} variant="outline" />
      <Button onClick={toggleColorMode} as={IconButton} icon={iconColorMode} />
    </Flex>
  );
});

export default Navbar;
