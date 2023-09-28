import styled from "styled-components"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const  ContainerReturn = styled.div`
margin-bottom:40px;
a{
    text-decoration:none;
    display: flex;
    align-items:center;
    gap:20px;
    color:  ${({ theme }) => theme.colors.darkGray};
    p{
       font-family:  ${({ theme }) => theme.fonts.sora};
       font-size:${({ theme }) => theme.fontSizes.lg};
    }
}
`

export const BoxIcon = styled.div`
   background-color:${({ theme }) => theme.colors.whiteice};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const ArrowBackIco = styled(ArrowBackIcon)`
color:${({ theme }) => theme.colors.mediumGray2};
`
