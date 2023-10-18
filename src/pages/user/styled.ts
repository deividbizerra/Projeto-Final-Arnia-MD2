import styled from "styled-components";

export const ContainerProfile = styled.div`
  margin-top: 33px;
  display: flex;
  gap: 48px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  hr {
    width: 420px;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  p {
    text-align: end;

    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.mediumGray2};
  }
`;

export const BoxProfile = styled.div`
  display: flex;
  -webkit-box-align: center;
  margin-bottom: 28px;
  justify-content: space-between;
  align-items: center;
  & p,
  h3 {
    margin-top: 20px;
  }
`;
