import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../Layouts/MainLayout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ResentActivationMail from "../components/Registration/ResentActivationMail";
import ResetPassword from "../components/Dashboard/profile/ResetPassword";
import ResetPasswordConfirmation from "../components/Dashboard/profile/ResetPasswordConfimation";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import AddProduct from "../pages/AddProduct";
import PaymentSuccess from "../pages/PaymentSuccess";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="resend-activation" element={<ResentActivationMail />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirmation />} />
        <Route path="shop/:productId" element={<ProductDetails />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      > 
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />}/>
        <Route path="orders" element={<Orders />} />
        <Route path="payment/success" element={<PaymentSuccess /> } />
        <Route path="products/add" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
