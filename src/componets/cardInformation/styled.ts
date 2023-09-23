import styled from "styled-components";

export const UserColor = styled.span<{
  variant?: "green" | "blue" | "red" | "yellow";
}>`
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
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxCardsUser = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.poppins};
   font-size: ${({ theme }) => theme.fontSizes.md};
   color: ${({ theme }) => theme.colors.mediumGray};
  }&& h3{
    font-family: ${({ theme }) => theme.fonts.sora};
   font-size: ${({ theme }) => theme.fontSizes.lg};
   color: ${({ theme }) => theme.colors.darkGray};
  }

`;

export const ContainerUsers = styled.div`
    display: flex;
    gap: 10px;
    background:${({ theme }) => theme.colors.whiteice};;
    width: 184px;
    height: 78px;
    padding: 10px;
    border-radius: 24px;
    align-items: center;
   
`

