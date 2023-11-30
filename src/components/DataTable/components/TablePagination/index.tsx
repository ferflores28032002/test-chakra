import React from "react";

import { Box, Button } from "@chakra-ui/react";

import { TablePaginationProps } from "../../interfaces/TablePagination.interface";

export const TablePagination: React.FC<TablePaginationProps> = ({
  pageIndex,
  canPreviousPage,
  canNextPage,
  pageCount,
  onPageChange,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop="4"
    >
      <Button
        onClick={() => onPageChange(Math.max(pageIndex - 1, 0))}
        isDisabled={!canPreviousPage}
      >
        Previous
      </Button>
      <Box>
        Page <strong>{pageIndex + 1}</strong> of <strong>{pageCount}</strong>
      </Box>
      <Button
        onClick={() => onPageChange(Math.min(pageIndex + 1, pageCount - 1))}
        isDisabled={!canNextPage}
      >
        Next
      </Button>
    </Box>
  );
};
