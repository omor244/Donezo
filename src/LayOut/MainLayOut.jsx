import { Outlet } from "react-router";
import SideNavbar from "../DashboardComponents/Navber/SideNavber";


const MainLayOut = () => {
    return (
        <div className="bg-white  grid grid-cols-12 gap-3 w-11/12 mx-auto">
            <header className="col-span-3">
              <SideNavbar></SideNavbar>
            </header>
            <main className="col-span-9">
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayOut;