import styled from "styled-components";


export const ButtonStyle = styled.button`
display: flex;
width: 262px;
height: 56px;
padding: 12px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 16px;
background: ${({ theme }) => theme.colors.brightGreen};
border:none;
color: ${({ theme }) => theme.colors.white};
font-family: ${({ theme }) => theme.fonts.poppins};
font-size: ${({ theme }) => theme.fontSizes.md};
cursor: pointer;
`