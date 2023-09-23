import styled from "styled-components";

export const ContainerSidbar = styled.div`
width: 280px;
min-height: 100vh;
  background: ${({ theme }) => theme.colors.darkGreen};
  color: white;
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

`;

export const Li = styled.li`
gap: 17px;
    padding: 5px;
    cursor: pointer;
    && a {
display:flex;
gap: 17px;
text-decoration: none;
color: ${({ theme }) => theme.colors.white};
    }
`

export const BoxHover = styled.div`
  :hover {
    background: red;
    width: 95%;
    margin-right: 5px;
    background: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 8px;
    
    transition: background 0.3s ease-in-out;&& a{
      color: ${({ theme }) => theme.colors.darkGreen};
    }
  }
`;


export const Container = styled.div`
display: flex;

`
