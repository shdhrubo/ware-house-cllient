import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Blogs from "./componets/Blogs/Blogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import InventoryDetails from "./componets/InventoryDetails/InventoryDetails";
import LogIn from "./componets/LogIn/LogIn";
import NotFound from "./componets/NotFound/NotFound";
import Register from "./componets/Register/Register";
import ManageInventory from "./ManageInventory/ManageInventory";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/manageinventories"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={<InventoryDetails></InventoryDetails>}
        ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
