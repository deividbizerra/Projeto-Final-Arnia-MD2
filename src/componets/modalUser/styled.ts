import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 175px;
  height: 100px;
  color: black;
  position: absolute;
  top: 163px;
  left: 90%;
  height: 127px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  filter: drop-shadow(0px 0px 25px rgba(163, 163, 163, 0.2));
`;

export const UserInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  margin-bottom: 20px;

  span {
    margin-right: 10px;
  }
  a {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.mediumGray};
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
`;
