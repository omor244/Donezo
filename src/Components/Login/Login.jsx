import React, { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
 
    const [loading, setLoading] = useState(false)

   
    

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        const email = e.target.email.value
        const password = e.target.password.value
        const formdata = {
            email,
            password
        }
      
      
        try {
            const response = await axios.post('https://task-api-eight-flax.vercel.app/api/login',formdata);

            console.log("data",response)

            if (response.data.token) {
              
                localStorage.setItem('token', JSON.stringify(response.data));

                Swal.fire("Success", "Successfully Login", "Success")
                navigate('/');
            }
        } catch (err) {
           
            if (err.response) {
               
              
                Swal.fire("Error", 'Invalid email or password!', "Error")
            } else if (err.request) {
             
                
                Swal.fire("Error", 'No response from server. Please check your internet connection.', "Error")
            } else {
                
                
                Swal.fire("Error", 'An error occurred. Please try again later.', "Error")
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">

                {/* Logo & Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#16423C] rounded-xl mb-4">
                        <span className="text-white text-3xl font-bold">D</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#111827]">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Login to manage your tasks effectively</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                required
                                defaultValue={"user1@example.com"}
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#219B60] focus:border-[#219B60] sm:text-sm transition duration-150"
                                placeholder="user1@example.com"
                               
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                defaultValue={"password123"}
                                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#219B60] focus:border-[#219B60] sm:text-sm transition duration-150"
                                placeholder="••••••••"
                              
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-[#219B60] focus:ring-[#219B60] border-gray-300 rounded" />
                            <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm font-medium text-[#219B60] hover:text-[#16423C]">Forgot password?</a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#16423C] hover:bg-[#123531] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16423C] transition duration-200"
                    >
                        <LogIn className="w-5 h-5 mr-2" /> Sign In
                    </button>
                </form>

               
                <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account? <span className="text-[#219B60] font-medium cursor-pointer">Contact Admin</span>
                </p>
            </div>
        </div>
    );
};

export default Login;