import styled from "styled-components";

export const CardWelcome = styled.div`
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
  margin-bottom: 20px;
`;

export const CardUsers = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const BoxDoctorsEndContractors = styled.div`
  border-radius: 24px;
  box-shadow: rgba(187, 192, 205, 0.4) 0px 7px 30px 0px;
  padding: 15px;
  && h4 {
    font-family: ${({ theme }) => theme.fonts.sora};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const ContainerTble = styled.div`
  padding: 15px;
  border-radius: 24px;
  margin-bottom: 20px;
  box-shadow: rgba(187, 192, 205, 0.7) 0px 7px 30px 0px;
  && h2 {
    font-family: ${({ theme }) => theme.fonts.sora};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
export const BoxInformationTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  && a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
`;
