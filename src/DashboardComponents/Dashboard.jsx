import ProjectCounter from "./Card/ProjectCounter";
import DashboardNavbar from "./Navber/DashboardNavber";
import Projects from "./Projects/Projects";
import TimeTracker from "./Projects/TimeTracker";
import ProjectsAnalytics from "./ProjectsAnalytics/ProjectsAnalytics";
import TeamAndProgress from "./TeamAndProgress/TeamAndProgress";


const Dashboard = () => {
    return (
        <div className="bg-base-200 ">
            <nav>
                <DashboardNavbar></DashboardNavbar>
            </nav>
            <div>
                <ProjectCounter></ProjectCounter>
            </div>
            <div className="grid grid-cols-12 gap-3 p-4">
                <div className="col-span-9 ">
                    <ProjectsAnalytics></ProjectsAnalytics>
                   
                    <TeamAndProgress></TeamAndProgress>
                </div>
                <div className="col-span-3 ">
                    <Projects></Projects>
                    <TimeTracker></TimeTracker>
                </div>

            </div>
         
        </div>
    );
};

export default Dashboard;