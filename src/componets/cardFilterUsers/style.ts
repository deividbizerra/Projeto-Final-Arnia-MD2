import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const BoxCardFilter = styled.div<{ isSelected?: boolean }>`
  display: flex;
  padding: 18px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 18px;
  border-radius: 16px 16px 0px 0px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: 32px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#ffffff" : theme.colors.whiteice};
  span {
    background: ${({ isSelected }) =>
      isSelected ? theme.colors.darkGreen : theme.colors.lightGreen};
    color: ${({ isSelected }) =>
      isSelected ? theme.colors.white : theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    display: flex;
    padding: 4px 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 100px;
  }
`;
