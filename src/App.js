import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AboutUs from "./componets/AboutUs/AboutUs";
import AddItems from "./componets/AddItems/AddItems";
import Blogs from "./componets/Blogs/Blogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import InventoryDetails from "./componets/InventoryDetails/InventoryDetails";
import Loading from "./componets/Loading/Loading";
import LogIn from "./componets/LogIn/LogIn";
import MyItems from "./componets/MyItems/MyItems";
import NotFound from "./componets/NotFound/NotFound";
import Register from "./componets/Register/Register";
import RequireAuth from "./componets/RequireAuth/RequireAuth";
import ManageInventory from "./ManageInventory/ManageInventory";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/manageinventories"
              element={
                <RequireAuth>
                  <ManageInventory></ManageInventory>
                </RequireAuth>
              }
            ></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/about" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="/inventory/:id"
              element={
                <RequireAuth>
                  {" "}
                  <InventoryDetails></InventoryDetails>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/additems"
              element={
                <RequireAuth>
                  <AddItems></AddItems>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/myitems"
              element={
                <RequireAuth>
                  <MyItems></MyItems>
                </RequireAuth>
              }
            ></Route>
            <Route path="/login" element={<LogIn></LogIn>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
          <ToastContainer></ToastContainer>
        </div>
      )}
    </div>
  );
}

export default App;
