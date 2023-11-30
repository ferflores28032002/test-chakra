import { memo } from "react";

import { Box, Button, Heading } from "@chakra-ui/react";

import { ColumnDef } from "@tanstack/react-table";
import { FiPlus } from "react-icons/fi";
import { DataTable } from "../../../../components/DataTable";

type DataRow = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  status: string;
};

const data: DataRow[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    email: "jane.doe@example.com",
    status: "Inactive",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    email: "jane.doe@example.com",
    status: "Inactive",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    email: "jane.doe@example.com",
    status: "Inactive",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    email: "jane.doe@example.com",
    status: "Inactive",
  },
];

const columns: ColumnDef<DataRow, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "options",
    header: "Options",
    cell: (info) => (
      <div>
        <Button
          color="white"
          bg="success"
          size="sm"
          onClick={() => console.log(`Editing row ${info.row.original.id}`)}
        >
          Edit
        </Button>
        <Button
          color="white"
          bg="danger"
          size="sm"
          ml="2"
          onClick={() => console.log(`Deleting row ${info.row.original.id}`)}
        >
          Delete
        </Button>
        <Button
          size="sm"
          ml="2"
          onClick={() => console.log(`Viewing row ${info.row.original.id}`)}
        >
          View
        </Button>
      </div>
    ),
  },
];
const ListCentrosTecnicos = memo(() => {
  return (
    <Box
      margin={2}
      padding={4}
      border="1px solid"
      borderColor="neBorder"
      rounded="md"
    >
      <Heading fontSize="1.5rem">Lista de Centros Tecnicos</Heading>
      <Button marginY={4} leftIcon={<FiPlus />}>
        Nuevo Centro
      </Button>

      <DataTable<DataRow> data={data} columns={columns} pageSize={2} />
    </Box>
  );
});

export default ListCentrosTecnicos;
