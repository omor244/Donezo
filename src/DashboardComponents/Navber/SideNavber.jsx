import React from 'react';
import {
    LayoutGrid,
    CheckSquare,
    Calendar,
    BarChart3,
    Users,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';

const SideNavbar = () => {
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
        { icon: <LogOut size={20} />, label: 'Logout' },
    ];

    return (
        <div className="w-64  bg-base-200 flex flex-col px-6 py-8 border-r border-gray-100 sticky top-0">

         
            <div className="flex items-center gap-2 mb-10 px-2">
               <img src="/logo.png" alt="" />
            </div>

            {/* 2. Menu Section */}
            <div className="flex-1">
                <p className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-4 px-2">Menu</p>
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative">
                            {item.active && (
                                <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-[#16423C] rounded-r-lg"></div>
                            )}
                            <button className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${item.active ? 'text-[#16423C] font-bold' : 'text-gray-400 hover:bg-gray-50'}`}>
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <span className="text-[14px]">{item.label}</span>
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

                {/* 3. General Section */}
                <p className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mt-10 mb-4 px-2">General</p>
                <ul className="space-y-2">
                    {generalItems.map((item, index) => (
                        <li key={index}>
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-400 rounded-xl hover:bg-gray-50 transition-all">
                                {item.icon}
                                <span className="text-[14px]">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 4. Download Card Section (Matching Screenshot 38) */}
           
            <div className='mt-10'>
                <img src="../../../public/download.png" alt="" />
           </div>

        </div>
    );
};

export default SideNavbar;