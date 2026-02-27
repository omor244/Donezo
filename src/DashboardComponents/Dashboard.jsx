import ProjectCounter from "./Card/ProjectCounter";
import DashboardNavbar from "./Navber/DashboardNavber";
import Projects from "./Projects/Projects";
import TimeTracker from "./Projects/TimeTracker";
import ProjectsAnalytics from "./ProjectsAnalytics/ProjectsAnalytics";
import TeamAndProgress from "./TeamAndProgress/TeamAndProgress";

const Dashboard = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <nav className="sticky top-0 z-30 bg-base-200">
                <DashboardNavbar />
            </nav>

            <div className="px-4 w-full py-2">
                <ProjectCounter />
            </div>

            <div className="flex flex-col xl:grid xl:grid-cols-12 gap-4 p-4">
                <div className=" xl:col-span-8 2xl:col-span-9 flex flex-col gap-4">
                    <ProjectsAnalytics />
                    <TeamAndProgress />
                </div>

                <div className=" xl:col-span-4 2xl:col-span-3  gap-4">
                    <div >
                        <Projects />
                    </div>
                    <div >
                        <TimeTracker />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;