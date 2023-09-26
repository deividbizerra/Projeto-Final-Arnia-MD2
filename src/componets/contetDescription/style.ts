import styled from "styled-components";

export const H1 = styled.h1`
font-family: ${({ theme }) => theme.fonts.sora};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.darkGray};
`

export const BoxContet = styled.div`

display: flex;
    align-items: center;
    gap: 10px;
    span{
        font-family: ${({ theme }) => theme.fonts.sora};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.darkGray};
    }
}
`