import styled from "styled-components";

export const BottonProfile = styled.button<{ isSelected?: boolean }>`
  display: flex;
  width: 14.375rem;
  padding: 10px 16px 10px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.darkGreen : theme.colors.lightgray};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.mediumGray2};
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.sora};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 6px;
`;
