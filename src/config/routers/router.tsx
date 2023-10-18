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
import NewPlan from "../../pages/newPlans";
import EditPlan from "../../pages/editPlans";
import ProfileEditing from "../../pages/user";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="registered-user" element={<UserCadrast />} />
          <Route path="profile" element={<ProfileEditing />} />
          <Route path="plans" element={<Plans />} />
          <Route path="new-plans" element={<NewPlan />} />
          <Route path="edit-plans" element={<EditPlan />} />
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
