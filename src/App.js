import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./componets/Blogs/Blogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import InventoryDetails from "./componets/InventoryDetails/InventoryDetails";
import NotFound from "./componets/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={<InventoryDetails></InventoryDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
