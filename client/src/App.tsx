import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import UserDashboard from "./pages/User/UserDashboard";
import Profile from "./pages/Shared/Profile";
import Favorites from "./pages/User/Favorites";
import Settings from "./pages/Shared/Settings";
import Inventory from "./pages/Admin/Inventory";
import AddAdmin from "./pages/Admin/AddAdmin";
import Accounts from "./pages/Admin/Accounts";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddProduct from "./pages/Admin/AddProduct";
import AdminViewProduct from "./pages/Admin/AdminViewProduct";
import UserViewProduct from "./pages/User/UserViewProduct";
import EditProduct from "./pages/Admin/EditProduct";
import EditProfile from "./pages/Shared/EditProfile";
import ChangePassword from "./pages/Shared/ChangePassword";
import DeleteAccount from "./pages/Shared/DeleteAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/user" element={<Layout />}>
        <Route path="dashboard">
          <Route index element={<UserDashboard />} />
          <Route path=":productId" element={<UserViewProduct />} />
        </Route>
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="editProfile" element={<EditProfile />} />
        </Route>
        <Route path="favorites">
          <Route index element={<Favorites />} />
          <Route path=":productId" element={<UserViewProduct />} />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route path="dashboard">
          <Route index element={<AdminDashboard />} />
          <Route path=":productId" element={<AdminViewProduct />} />
          <Route path="editProduct/:productId" element={<EditProduct />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="editProfile" element={<EditProfile />} />
        </Route>
        <Route path="inventory">
          <Route index element={<Inventory />} />
          <Route path="editProduct/:productId" element={<EditProduct />} />
        </Route>
        <Route path="addAdmin" element={<AddAdmin />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="settings">
          <Route index element={<Settings />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="deleteAccount" element={<DeleteAccount />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
