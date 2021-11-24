import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";


// import ReviewGet from "././components/ReviewGet/ReviewGet";

// import AuthProvider from "./components/Context/AuthProvider";
// import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Contact from "./components/Contact/Contact";
// import Register from "./components/Register/Register";
// import Services from "./components/Services/Services";
// import Error from "./components/Error/Error";
// import Footer from "./components/Footer/Footer";
// import MyOrders from "./components/MyOrders/MyOrders";
// import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
// import AddNewService from "./components/AddNewService/AddNewService";
// import Confirm from "./components/Confirm/Confirm";
// import Offer from "./components/Offer/Offer";
// import Dashboard from "./components/Dasboard/Dashbaord";
// import Pay from "./components/Pay/Pay";
// import Review from "./components/Review/Review";
// import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
// import ManageServices from "./components/ManageServices/ManageServices";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/servicedetail/:detailId" element={<ServiceDetail />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
