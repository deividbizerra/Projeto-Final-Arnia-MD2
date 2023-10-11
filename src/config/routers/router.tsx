import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import BaseLayout from "../../componets/baseLayout";
import UserCadrast from "../../pages/registeredUser";
import Home from "../../pages/dashBord";
import Plans from "../../pages/plans";
import Specialties from "../../pages/specialties";
import Notifications from "../../pages/notifications";
import Faq from "../../pages/faq";
import Newspecialty from "../../pages/newSpecialty";
import NewNotification from "../../pages/newNotification";
import NewFaq from "../../pages/newFaq";
import UserData from "../../pages/userData";
import Editspecialty from "../../pages/editSpecialty";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="registered-user" element={<UserCadrast />} />
          <Route path="plans" element={<Plans />} />
          <Route path="specialties" element={<Specialties />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="faq" element={<Faq />} />
          <Route path="new-faq" element={<NewFaq />} />
          <Route path="new-specialty" element={<Newspecialty />} />
          <Route path="edit-specialty/:id" element={<Editspecialty />} />
          <Route path="new-notifications" element={<NewNotification />} />
          <Route path="userData" element={<UserData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
