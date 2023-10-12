import styled from "styled-components"

export const ContainerCardFilter = styled.div`
display: flex;
gap:16px
`
export const ContainerFilter = styled.div`
display:flex;
justify-content: space-between;
`

export const ContainerTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size:  ${({ theme }) => theme.fontSizes.md};
    font-weight: 400;

    }
    h3{
font-family: ${({ theme }) => theme.fonts.sora};
font-size:  ${({ theme }) => theme.fontSizes.lg};
font-weight: 600;
    }

`