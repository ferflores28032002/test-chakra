import { memo } from "react";

import MainLayout from "../../layout/MainLayout";

import ListCentrosTecnicos from "./components/ListCentrosTecnicos";
import BuscarCentroTecnico from "./components/SearchCentroTecnico";

const Home = memo(() => {
  return (
    <MainLayout>
      <BuscarCentroTecnico />
      <ListCentrosTecnicos />
    </MainLayout>
  );
});

export default Home;
