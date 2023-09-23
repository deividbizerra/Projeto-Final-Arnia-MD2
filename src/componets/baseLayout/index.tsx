import { Outlet } from "react-router-dom"

import Sidebar from "../header/sidbar"
import { Container } from "../header/styled-sidbar"




const BaseLayout = () => {
  return (
    <Container>
      
      <Sidebar/>
    
      <Outlet/>
    
    </Container>
  )
}

export default BaseLayout
