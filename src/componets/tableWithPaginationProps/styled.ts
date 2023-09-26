import styled from "styled-components"
import Pagination from '@mui/material/Pagination';


export const StyledPagination = styled(Pagination)`
  & .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected{
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }

  & .MuiPaginationItem-root:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGreen}!important;
  }& .MuiPagination-ul{
    display:flex;
    justify-content: flex-end;

  }
`;