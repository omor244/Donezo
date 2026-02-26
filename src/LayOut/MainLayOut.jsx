import { Outlet } from "react-router";
import DashboardNavbar from "../DashboardComponents/Navber/DashboardNavber";
import SideNavbar from "../DashboardComponents/Navber/SideNavber";


const MainLayOut = () => {
    return (
        <div className="bg-white grid grid-cols-12 w-11/12 mx-auto">
            <header className="col-span-4">
              <SideNavbar></SideNavbar>
            </header>
            <main className="col-span-8">
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayOut;