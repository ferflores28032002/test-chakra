export type TablePaginationProps = {
  pageIndex: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  onPageChange: (newPageIndex: number) => void;
};
