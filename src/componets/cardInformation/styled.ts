import styled from "styled-components";

export const UserColor = styled.span<{ variant?: "green" | "blue" | "red" | "yellow" }>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "blue":
        return theme.colors.blue;
      case "red":
        return theme.colors.red;
      case "yellow":
        return theme.colors.yellow;
      default:
        return theme.colors.green;
    }
  }};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Resto do código permanece o mesmo
