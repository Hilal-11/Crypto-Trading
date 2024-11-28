import React from 'react'
import './ImageSpining.css'
import signUpLogImg from '../../Assets/signUpLogImg.webp'
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
function SignUp() {

    const [isSignUp , setIsSignUp] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('signUpEmail' , formData.email)
        localStorage.setItem('signUpPassword' , formData.password)

        setIsSignUp(true)
      };

      if(isSignUp) {
        return <Navigate to="/Login"/>
      }else{
      }

      


  return (
      
<div>  
    <div className=' rounded-lg bg-transparent lg:h-auto lg:w-[80%] px-4 lg:px-10 py-10 -my-4 lg:grid grid-cols-2 justify-center mx-auto gap-10 lg:my-10'>
        <div className=' flex justify-center my-0 lg:my-0 order-2 lg:order-1'>
            <img className='rotate w-[70%] lg:w-full' src={signUpLogImg} alt="" />
        </div>
        <div className="my-14 w-full lg:my-0 lg:px-10">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-slate-900 rounded-lg px-4 py-10 lg:px-6 space-y-4 "
          >
            <h2 className="text-2xl font-semibold text-white text-center">Create New Account</h2>

            {/* Full Name */}
            <div>
              <label className=" text-gray-700 text-sm font-bold mb-2" >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-4 border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter Full Name :- "
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-4 border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter Email :- "
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-4 border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-4 border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-4 border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="18"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center py-6 w-full">
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 w-full rounded focus:outline-none focus:shadow-outline "
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
    </div>

</div>

  )
}

export default SignUp
