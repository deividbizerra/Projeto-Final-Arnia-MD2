import styled from "styled-components";

export const Tabela = styled.table`

  width: 100%;
  border-collapse: collapse;
  border-radius: 16px 16px 0 0; /* Define o border-radius nos cantos superiores */
font-family:${({ theme }) => theme.fonts.poppins};
font-size:${({ theme }) => theme.fontSizes.sm};
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
`;

