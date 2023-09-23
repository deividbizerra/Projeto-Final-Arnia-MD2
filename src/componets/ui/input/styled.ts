import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const Input = styled(TextField)`
  width: 100%;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.mediumGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
