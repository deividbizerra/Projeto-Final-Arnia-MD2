import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import BaseLayout from "../../componets/baseLayout";
import UserCadrast from "../../pages/usuarioCadastrados";
import Home from "../../pages/dashBord";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<BaseLayout />}>
        <Route index element={<Home />} />
          <Route path="usuario-cadastrado" element={<UserCadrast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
