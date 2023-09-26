import { Outlet } from "react-router-dom"
import Sidebar from "../header/sidbar"
import { Container } from "../header/styled-sidbar"
import { ContainerMain } from "../ui/container"
import NaveBar from "../header/naveBar"




const BaseLayout = () => {
  return (
    <>
    <Container >
    <NaveBar />
      <Sidebar/>
      
    <ContainerMain style={{maxWidth: "100vw"}}>
    <Outlet/>
    </ContainerMain>
      
    
    </Container>
    </>
  )
}

export default BaseLayout
