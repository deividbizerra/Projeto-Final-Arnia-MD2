import styled from "styled-components";

export const BoxCardFilter = styled.div`
display: flex;
padding: 18px;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
gap: 18px;
border-radius: 16px 16px 0px 0px;
font-family:${({ theme }) => theme.fonts.poppins};
font-size:${({ theme }) => theme.fontSizes.md};
margin-top: 32px;
cursor:pointer;
    span{
        background: green;
        color:${({ theme }) => theme.colors.white};
        font-size:${({ theme }) => theme.fontSizes.sm};
    display: flex;
    padding: 4px 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 100px;
}
    
`



