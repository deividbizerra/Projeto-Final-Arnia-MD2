import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";


export const EditIconStyled = styled(EditIcon)`
color:#004CE8
`

export const DeleteIconStyled = styled(DeleteIcon)`
color:#FF3333
`

export const VisibilityIconStyled = styled(VisibilityIcon)`
color:#616161
`

export const ContainerIcons =styled.div`
box-shadow: rgba(187, 192, 205, 0.6) 2px 2px 10px 0px;
    border-radius: 8px;
    border: 1px solid var(--cinzas-cinza-300,#E0E0E0);
    background: var(--Branco,#FFF);
    padding: 0px;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`