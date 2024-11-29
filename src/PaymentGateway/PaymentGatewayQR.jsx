import React, { useState } from "react";
import { FaQrcode } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import QR from '.././Assets/QR_1.jpg'

const PaymentGatewayQR = () => {

  const [activeTab, setActiveTab] = useState("Tab1");
  const [showFailedTransaction , setShowFailedTransaction] = useState(false);
  const [loader , setLoader] = useState(false);



    const [formData, setFormData] = useState({
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    
 

    const [errors, setErrors] = useState({});

  
    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Validate form fields
    const validateForm = () => {
      const newErrors = {};
  
      if (!formData.cardName) newErrors.cardName = "Cardholder name is required.";
      if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber))
        newErrors.cardNumber = "Card number must be 16 digits.";
      if (!formData.expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry))
        newErrors.expiry = "Expiration date must be in MM/YY format.";
      if (!formData.cvv || !/^\d{3,4}$/.test(formData.cvv))
        newErrors.cvv = "CVV must be 3 or 4 digits.";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      setLoader(true)
      e.preventDefault();
      if (validateForm()) {
        setTimeout(() => {
          setLoader(false);
          setShowFailedTransaction(true);
        },4000)
      }
    };




  return (
    <div className="px-2 h-svh lg:py-10">
      <div className=" lg:w-[600px] mx-auto bg-[#010B13] shadow-2xl shadow-blue-700 rounded-xl">
      {/* Tab buttons */}
      <div className="flex justify-evenly py-10">
        <div className="border text-center px-10 py-6 rounded-xl">
          <button onClick={() => setActiveTab("Tab1")} className=" text-white text-4xl">
            <MdAddCard></MdAddCard>
            
          </button>
          <p className="text-center">Card</p>
        </div>
        <div className="border text-cente px-10 py-6 rounded-xl">
          <button onClick={() => setActiveTab("Tab2")} className=" text-white text-4xl">
            <FaQrcode></FaQrcode>
            
          </button>
          <p className="text-center">QR</p>
        </div>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "Tab1" ? (
          <div>
           

           <div className=""
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#010B13",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Cardholder Name */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="cardName" style={{ display: "block", marginBottom: "5px" }}>
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            placeholder="Enter name on card"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.cardName && <p style={{ color: "red" }}>{errors.cardName}</p>}
        </div>

        {/* Card Number */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="cardNumber" style={{ display: "block", marginBottom: "5px" }}>
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter 16-digit card number"
            maxLength="16"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.cardNumber && <p style={{ color: "red" }}>{errors.cardNumber}</p>}
        </div>

        {/* Expiration Date */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="expiry" style={{ display: "block", marginBottom: "5px" }}>
            Expiration Date (MM/YY)
          </label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={formData.expiry}
            onChange={handleInputChange}
            placeholder="MM/YY"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.expiry && <p style={{ color: "red" }}>{errors.expiry}</p>}
        </div>

        {/* CVV */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="cvv" style={{ display: "block", marginBottom: "5px" }}>
            CVV
          </label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="Enter 3 or 4 digit CVV"
            maxLength="4"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.cvv && <p style={{ color: "red" }}>{errors.cvv}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#6200ea",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </form> 

        {
          loader ? (
            <div className="w-full flex justify-center py-4">
            <span className="block w-[40px] h-[40px] bg-transparent rounded-full border-4 border-t-0 border-r-0 animate-spin border-violet-600"></span>
          </div>
          ) : (
            <div></div>
          )
        }
          {
            showFailedTransaction ? (
              <p className=" text-red-700 font-semibold py-4 px-2 text-justify" ><span className=" font-extrabold text-2xl text-red-700">Oops!</span> There was an issue processing your payment.
To complete your transaction, please scan the QR code below using your preferred payment app.</p>
            ) : (<div>
              
            </div>
            )
          }
      <br /> <br /> <br />
    </div>
          </div>
        ) : (
          <div className="px-10">
            <div className="grid grid-cols-1 justify-center  bg-slate-50 h-auto ">
              <img className="" src={QR} alt="" />
            </div> 
            <p className="py-10 pc-6 font-bold text-justify" >To complete your transaction, please scan the provided QR code using
        your mobile banking app or QR code scanner. Ensure that your scanner is focused on the QR code to avoid errors.</p>
            <br /> <br />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default PaymentGatewayQR;
