import styled from "styled-components";

export const ContainerNews = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 24px;
  font-family: Poppins;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.sora};
`;
