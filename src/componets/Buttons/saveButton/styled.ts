import styled from "styled-components"


export const ButtonSave = styled.button`
display: flex;
width: 400px;
height: 56px;
padding: 12px 64px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 16px;
background: ${({ theme }) => theme.colors.darkGreen};
color:${({ theme }) => theme.colors.white};
font-size:  ${({ theme }) => theme.fontSizes.md};
border:none;
margin-top: 40px;
cursor: pointer;
`