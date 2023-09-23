import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-image: url(https://uploaddeimagens.com.br/images/004/616/041/original/Login.png?1695346298);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 45px;
  box-shadow: 0px 0px 10px 0px rgba(97, 97, 97, 0.3);
  border-radius: 24px;
  width: 465px;
  height: 540px;
  font-family: ${({ theme }) => theme.fonts.sora};
  && button {
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    cursor: pointer;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const CheckboxLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.mediumGray2};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
`;
