import styled from "styled-components";

export const ContainerSidbar = styled.div`
  width:330px;
  background: ${({ theme }) => theme.colors.darkGreen};
  color: white;
  height: 100vh;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.poppins};
  position: relative;
`;

export const ContainerImg = styled.div`
  justify-content: center;
  display: flex;
  > img {
    margin-top: 15px;
  }
`;
export const Ul = styled.ul`
  margin-top: 45px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 23px;

  margin-left: 20px;
  && li {
    display: flex;
    gap: 17px;
    padding: 5px;
    cursor: pointer;
  }
`;

export const BoxHover = styled.div`
  :hover {
    background: red;
    width: 95%;
    margin-right: 5px;
    background: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 8px;
    color: #046639;
    transition: background 0.3s ease-in-out;
  }
`;


export const Container = styled.div`
display: flex;

`
