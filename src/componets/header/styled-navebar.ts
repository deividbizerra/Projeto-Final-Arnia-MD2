import styled from "styled-components";

export const ContainerUser = styled.div`
color: black;
    width: 66rem;
    margin-left: 262px;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    position: absolute;
    height: 130px;
    padding: 37px 32px;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    gap: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  > span {
    background: ${({ theme }) => theme.colors.darkGreen};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
  }
  && h3 {
    font-family: ${({ theme }) => theme.fonts.sora};
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  && p {
    color: ${({ theme }) => theme.colors.mediumGray};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
