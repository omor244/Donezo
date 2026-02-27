import React, { useState } from 'react';
import {
    LayoutGrid,
    CheckSquare,
    Calendar,
    BarChart3,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import DownloadMobileApp from '../Card/DownloadMobileApp';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SideNavbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <LayoutGrid size={20} />, label: 'Dashboard', active: true },
        { icon: <CheckSquare size={20} />, label: 'Tasks', badge: '12+' },
        { icon: <Calendar size={20} />, label: 'Calendar' },
        { icon: <BarChart3 size={20} />, label: 'Analytics' },
        { icon: <Users size={20} />, label: 'Team' },
    ];

    const generalItems = [
        { icon: <Settings size={20} />, label: 'Settings' },
        { icon: <HelpCircle size={20} />, label: 'Help' },
    ];

    const handelLogOut = () => {
        localStorage.removeItem("token");
        Swal.fire("Success", "Successfully LogOut", "success");
        navigate("/login");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-100"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`
                fixed lg:sticky top-0 left-0 z-40
                w-[260px] lg:w-auto
                bg-base-200 flex flex-col px-6 py-8 border-r border-gray-100
                transition-transform duration-300 ease-in-out
                overflow-y-auto
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center gap-2 mb-10 px-2">
                    <img className='cursor-pointer' src="/logo.png" alt="Logo" />
                </div>

                <div className="flex-1">
                    <p className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-4 px-2">Menu</p>
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative">
                                {item.active && (
                                    <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-[#16423C] rounded-r-lg"></div>
                                )}
                                <button className={`w-full cursor-pointer flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${item.active ? 'text-[#16423C] font-bold' : 'text-gray-400 hover:bg-gray-50'}`}>
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <span className={`${item.active ? 'text-[#16423C] font-bold' : 'text-gray-400 hover:bg-gray-50'}`}>{item.label}</span>
                                    </div>
                                    {item.badge && (
                                        <span className="bg-[#16423C] text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <p className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mt-10 mb-4 px-2">General</p>
                    <ul className="space-y-2">
                        {generalItems.map((item, index) => (
                            <li key={index}>
                                <button className="w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 text-gray-400 rounded-xl hover:bg-gray-50 transition-all">
                                    {item.icon}
                                    <span className="text-[14px]">{item.label}</span>
                                </button>
                            </li>
                        ))}
                        <li>
                            <button onClick={handelLogOut} className='flex w-full px-3 py-2.5 cursor-pointer items-center gap-3 text-red-500 hover:bg-red-50 rounded-xl transition-all'>
                                <LogOut size={20} /> <span className='font-bold text-[14px]'>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='mt-10 lg:block hidden'>
                    <DownloadMobileApp />
                </div>

                <div className='mt-10 lg:hidden transform scale-90 origin-left'>
                    <DownloadMobileApp />
                </div>
            </div>
        </>
    );
};

export default SideNavbar;