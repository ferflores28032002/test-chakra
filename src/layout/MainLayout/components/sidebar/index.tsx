import { Box, Flex, Image, Text } from "@chakra-ui/react";

import ButtonCollapse from "../../../../components/ButtonCollapse";

import { item } from "../../../../components/ButtonCollapse/interfaces/index";

const routes: item[] = [
  { name: "Centros Tecnicos", path: "/centrosTecnicos" },
  { name: "Categorias", path: "/categorias" },
  { name: "SubCategorias", path: "/subCategorias" },
];

const Sidebar = () => {
  const onSelect = (path: string) => {
    // realizar el cambio de ruta
    console.log(path);
  };

  return (
    <Box
      marginY={2}
      width="ful"
      paddingLeft={2}
      minHeight="85vh"
      border="1px solid"
      borderColor="neBorder"
      borderRadius="0px 6px"
    >
      <Flex
        gap={2}
        alignItems="center"
        fontWeight="bold"
        padding={4}
        width="full"
      >
        <Image width="2rem" height="2rem" src="icons/start.svg" />
        <Text>Inicio</Text>
      </Flex>

      <ButtonCollapse onSelect={onSelect} items={routes} />
    </Box>
  );
};

export default Sidebar;
