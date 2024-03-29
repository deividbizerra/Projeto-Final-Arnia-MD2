import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { StyledPagination } from './styled';

type TablePaginationProps = {
  data: Record<string, string | boolean>[];
  itemsPerPage: number;
  renderTable: (data: Record<string, string | boolean>[]) => React.ReactNode;
};

const TablePagination: React.FC<TablePaginationProps> = ({ data, itemsPerPage, renderTable }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  // Ensure that data is always an array, and add a loading check
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Loading...</div>; // You can customize the loading indicator here
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      {renderTable(displayedData)}
      <Stack spacing={2}>
        <StyledPagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default TablePagination;
