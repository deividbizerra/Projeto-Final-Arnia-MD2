import styled from "styled-components";

export const CardWelcome = styled.div`
  width: 440px;
  height: 340px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sora};
  border-radius: 24px;
  padding: 15px;

  && img {
    width: 50%;
  }
  && h2 {
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
  && p {
    width: 385px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const DivDate = styled.div`
  display: flex;
  gap: 9px;
  background-color: ${({ theme }) => theme.colors.forestGreen};
  width: 130px;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ContainerHome = styled.div`
  display: flex;
  gap: 48px;
`;

export const CardUsers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  margin-left: 15px;
`;


