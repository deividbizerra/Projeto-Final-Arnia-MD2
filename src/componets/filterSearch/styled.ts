// No seu arquivo de estilo (styled-components)
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const InputFilterSearch = styled.input`
  width: 90%;
  justify-content: center;
  flex-shrink: 0;
  outline: none;
  border: none;
  background: transparent;
  padding-left: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 400px;
  height: 56px;
  border-radius: 16px;
  border: 1.5px solid #e0e0e0;
`;

export const IconSearch = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.darkGreen};
  cursor: pointer;
`;
