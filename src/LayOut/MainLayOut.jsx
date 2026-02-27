import { Outlet } from "react-router";
import SideNavbar from "../DashboardComponents/Navber/SideNavber";

const MainLayOut = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col lg:grid lg:grid-cols-12 w-full max-w-[1500px] mx-auto min-h-screen">

               
                <aside className="lg:col-span-3 xl:col-span-3 border-r border-gray-100">
                    <div className="lg:sticky lg:top-0 lg:h-screen overflow-y-auto scrollbar-hide">
                      
                        <div className="w-full ">
                            <SideNavbar />
                        </div>
                    </div>
                </aside>

              
                <main className="lg:col-span-9 xl:col-span-9 flex flex-col min-h-screen bg-gray-50/50 overflow-hidden">
                    <div className="flex-1 p-4 md:p-6 lg:p-8">
                        <Outlet />
                    </div>
                </main>

            </div>
        </div>
    );
};

export default MainLayOut;