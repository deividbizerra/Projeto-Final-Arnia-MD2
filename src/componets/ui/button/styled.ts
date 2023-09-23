import styled from "styled-components";

export const StyledButton = styled.button<{ variant: "MAIN" | "SECONDARY" }>`
  display: flex;
  width: 400px;
  height: 56px;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) =>
    variant === "MAIN" ? theme.colors.darkGreen : theme.colors.brightGreen};
  border: none;
  cursor: pointer;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
