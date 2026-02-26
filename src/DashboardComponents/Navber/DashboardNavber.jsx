import React from 'react';
import { Search, Mail, Bell, Command, ChevronDown } from 'lucide-react';

const DashboardNavbar = () => {
    return (
        <nav className="flex bg-base-200 items-center justify-between px-8 py-4  w-full">

       
           

          
            <div className="flex-1 flex justify-center max-w-xl mx-10">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search task"
                        className="block w-full pl-11 pr-20 py-2.5 bg-white border-none rounded-2xl shadow-sm ring-1 ring-gray-100 focus:ring-2 focus:ring-[#16423C] outline-none text-sm transition-all"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <div className="flex items-center gap-1 px-1.5 py-0.5 border border-gray-200 rounded-md text-[10px] text-gray-400 font-mono">
                            <Command size={10} />
                            <span>F</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Right Side: Notifications & Correct User Avatar (Same as image) */}
            <div className="flex items-center gap-4">
                {/* Interaction Icons */}
                <div className="flex items-center gap-2">
                    <button className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:bg-gray-50">
                        <Mail size={20} />
                    </button>
                    <button className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:bg-gray-50">
                        <Bell size={20} />
                    </button>
                </div>

                {/* User Profile Section (Matching Image exactly) */}
                <div className="flex items-center gap-3">
                    {/* Circular Avatar with the same skin tone/style from image */}
                    <div className="relative w-10 h-10">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok&backgroundColor=FFD5DC"
                            alt="Totok Michael"
                            className="w-full h-full rounded-full object-cover bg-[#FFD5DC]"
                        />
                    </div>
                    {/* User Text Info */}
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-bold text-gray-900 leading-none mb-1">Totok Michael</span>
                        <span className="text-[11px] text-gray-400">tmichael20@mail.com</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;