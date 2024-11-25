import Navigation from "./Components/Navigation/Navigation"
import Home from "./Components/Pages/Home"
import Login from "./Components/Authentication/Login"
import SignUp from "./Components/Authentication/SignUp"
import PaymentSuccess from "./TransactionPages/PaymentSuccess"
import PaymentFailed from "./TransactionPages/PaymentFailed"
import { Route , Routes } from 'react-router-dom'
import AdminPanel from "./Dashboard/AdminPanel"
import Footer from "./Components/Pages/Footer"
import CoinsDetailsGraph from "./Dashboard/CoinsDetailsGraph"
import FrontEndPaymentPage from "./PaymentGateway/Client/FrontEndPaymentPage"
import PaymentGatewayQR from "./PaymentGateway/PaymentGatewayQR"
import { useState } from "react"

export default function App() {

  const [formData, setFormData] = useState([]);
  function receiveChilsData (receiveData) {
    setFormData(receiveData);
  }

  console.log("Parent state (formData):", formData);


  return (
    <div  className="relative bg-[#010B13]">
      <div>
        <Navigation />
      </div>
      <div className=" h-auto lg:max-w-[90%] mx-auto">


      <div className="mx-auto py-6"> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login getChildData={receiveChilsData} />}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/PaymentSuccess" element={<PaymentSuccess/>}></Route>
          <Route path="/PaymentFailed" element={<PaymentFailed/>}></Route>
          <Route path="/PaymentGateway" element={<FrontEndPaymentPage/>}></Route>
          <Route path="/CoinsDetailsGraph" element={<CoinsDetailsGraph/>}></Route>
          <Route path="/PaymentGatewayQR" element={<PaymentGatewayQR/>}></Route>
          <Route path="/AdminPanel" element={ <AdminPanel data={formData}  className="" />}></Route>
        </Routes>
      </div>

    </div>
    {/* <div className="absolute -top-0">
    <Routes>
        <Route path="/AdminPanel" element={<AdminPanel className="" />}></Route>
    </Routes>
    </div> */}

    

    <div className="">
      <Footer />
      </div>

  </div>

  )
}