import styled from "styled-components";

export const Tables = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 30px;
  th,
  td {
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
  }
  tr:nth-child(even) {
    background: ${({ theme }) => theme.colors.whiteice};
  }
`;
