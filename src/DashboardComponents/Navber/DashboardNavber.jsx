import React from 'react';
import { Search, Mail, Bell, Command, Menu } from 'lucide-react';

const DashboardNavbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">

            {/* মোবাইল মেনু বাটন (শুধুমাত্র মোবাইলে দেখাবে যদি প্রয়োজন হয়) */}
            {/* <div className="lg:hidden flex items-center mr-2">
                <button className="p-2 text-gray-600">
                    <Menu size={24} />
                </button>
            </div> */}

           
            <div className="flex-1 flex justify-start lg:justify-center max-w-xs md:max-w-md lg:max-w-xl">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search task"
                        className="block w-full pl-10 md:pl-11 pr-4 md:pr-20 py-2 md:py-2.5 bg-gray-50/50 border-none rounded-xl md:rounded-2xl shadow-sm ring-1 ring-gray-100 focus:ring-2 focus:ring-[#16423C] outline-none text-xs md:text-sm transition-all"
                    />
                  
                    <div className="hidden md:flex absolute inset-y-0 right-0 pr-3 items-center">
                        <div className="flex items-center gap-1 px-1.5 py-0.5 border border-gray-200 rounded-md text-[10px] text-gray-400 font-mono">
                            <Command size={10} />
                            <span>F</span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex items-center gap-2 md:gap-6 ml-4">

                {/* আইকন বাটনসমূহ - ছোট স্ক্রিনে শুধুমাত্র বেল বাটন রাখতে পারেন */}
                <div className="flex items-center gap-1 md:gap-2">
                    <button className="hidden sm:flex p-2 md:p-2.5 bg-white rounded-xl shadow-sm border border-gray-50 text-gray-400 hover:bg-gray-50 hover:text-[#16423C] transition-colors">
                        <Mail size={18} className="md:w-[20px]" />
                    </button>
                    <button className="relative p-2 md:p-2.5 bg-white rounded-xl shadow-sm border border-gray-50 text-gray-400 hover:bg-gray-50 hover:text-[#16423C] transition-colors">
                        <Bell size={18} className="md:w-[20px]" />
                     
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>

             
                <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok&backgroundColor=FFD5DC"
                            alt="Totok Michael"
                            className="w-full h-full rounded-full object-cover border border-gray-100 group-hover:border-[#16423C] transition-all"
                        />
                    </div>
                  
                    <div className="hidden lg:flex flex-col text-left">
                        <span className="text-sm font-bold text-gray-900 leading-none mb-1">Totok Michael</span>
                        <span className="text-[11px] text-gray-400">tmichael20@mail.com</span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default DashboardNavbar;