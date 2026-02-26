import ProjectCounter from "./Card/ProjectCounter";
import DashboardNavbar from "./Navber/DashboardNavber";


const Dashboard = () => {
    return (
        <div>
            <nav>
                <DashboardNavbar></DashboardNavbar>
            </nav>
            <div>
                <ProjectCounter></ProjectCounter>
            </div>
            <div className="grid grid-cols-10 gap-3">
                <div className="col-span-7 bg-green-500">
                    ka;lsdk
                </div>
                <div className="col-span-3 bg-red-600">
a      a'dlf
                </div>
              </div>
        </div>
    );
};

export default Dashboard;