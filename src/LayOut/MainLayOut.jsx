import { Outlet } from "react-router";
import SideNavbar from "../DashboardComponents/Navber/SideNavber";

const MainLayOut = () => {
    return (
        <div className="bg-white ">
            <div className="flex flex-col lg:grid lg:grid-cols-12 w-full max-w-[1500px] mx-auto min-h-screen overflow-x-hidden">

                <aside className="lg:col-span-3 xl:col-span-3 sticky top-0  z-50">
                    <SideNavbar />
                </aside>

                <main className="lg:col-span-9 xl:col-span-9 flex flex-col min-h-screen bg-gray-50/50">
                    <div className="flex-1 p-4 md:p-6 lg:p-8">
                        <Outlet />
                    </div>

                    <footer className="py-6 px-8 text-center text-sm text-gray-400 border-t border-gray-100 bg-white/50">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </footer>
                </main>

            </div>
        </div>
    );
};

export default MainLayOut;