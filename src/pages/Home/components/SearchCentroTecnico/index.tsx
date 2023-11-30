import { memo } from "react";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

import CustomInput from "../../../../components/CustomInput";
import CustomSelect from "../../../../components/CustomSelect";

import { selectDataEmpresa, selectDataEstado } from "./data";

const BuscarCentroTecnico = memo(() => {
  const columnas = useBreakpointValue({ base: 1, md: 4 });

  return (
    <Box
      border="1px solid "
      borderColor="neBorder"
      margin={2}
      padding={4}
      rounded="md"
    >
      <Grid templateColumns={`repeat(${columnas}, 1fr)`} gap={6}>
        <GridItem>
          <CustomInput
            label="Id Centro Tecnico"
            placeholder="Id Centro Tecnico"
          />
        </GridItem>
        <GridItem>
          <CustomInput label="Descripcion" placeholder="Descripcion" />
        </GridItem>
        <GridItem>
          <CustomSelect label="Empresa" options={selectDataEmpresa} />
        </GridItem>
        <GridItem>
          <CustomSelect label="Estado" options={selectDataEstado} />
        </GridItem>
      </Grid>
      <Flex justifyContent="center" gap="6" padding={4} marginTop={4}>
        <Button colorScheme="gray">Buscar</Button>
        <Button colorScheme="gray">Resetear</Button>
      </Flex>
    </Box>
  );
});

export default BuscarCentroTecnico;
