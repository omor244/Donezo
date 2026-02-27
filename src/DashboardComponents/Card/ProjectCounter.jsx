import { ArrowUpRight, Plus, Upload, TrendingUp } from 'lucide-react';
import Swal from 'sweetalert2';
import * as motion from "motion/react-client"

const ProjectCounter = () => {
    const stats = [
        {
            title: 'Total Projects',
            value: 24,
            badge: 'Increased from last month',
            highlight: true,
        },
        {
            title: 'Ended Projects',
            value: 10,
            badge: 'Increased from last month',
            highlight: false,
        },
        {
            title: 'Running Projects',
            value: 12,
            badge: 'Increased from last month',
            highlight: false,
        },
        {
            title: 'Pending Project',
            value: 2,
            badge: 'On Discuss',
            highlight: false,
        },
    ];

    const handelAppProject = () => {
        Swal.fire("Error", "Admin Can Add Project", "error");
    };

   

    return (
        <div className="bg-gray-100  font-sans p-4 md:p-6">
            <div className="  lg:max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handelAppProject}
                            className="flex-1 md:flex-none cursor-pointer flex items-center justify-center gap-2 bg-[#1a4d3a] hover:bg-[#1f5c46] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"
                        >
                            <Plus className="w-4 h-4" />
                            Add Project
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold px-5 py-2.5 rounded-full border border-gray-200 transition-all duration-200 active:scale-95">
                            <Upload className="w-4 h-4" />
                            Import Data
                        </button>
                    </div>
                </div>
               
                
                <div className="grid grid-cols-1 w-full lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                           
                            key={index}
                            className={`relative rounded-[24px] p-6 flex flex-col justify-between min-h-[160px] transition-transform duration-300 hover:-translate-y-1 shadow-sm ${stat.highlight
                                    ? 'bg-[#1a4d3a] text-white'
                                    : 'bg-white text-gray-900 border border-gray-100'
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <span className={`text-sm font-semibold ${stat.highlight ? 'text-green-200' : 'text-gray-500'}`}>
                                    {stat.title}
                                </span>
                                <button
                                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${stat.highlight
                                            ? 'border-green-600 bg-green-800/40 hover:bg-green-700/50'
                                            : 'border-gray-100 bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <ArrowUpRight className={`w-4.5 h-4.5 ${stat.highlight ? 'text-white' : 'text-gray-600'}`} />
                                </button>
                            </div>

                            <div className="my-2">
                                <div className={`text-5xl font-bold tracking-tight ${stat.highlight ? 'text-white' : 'text-gray-900'}`}>
                                    {stat.value}
                                </div>
                            </div>

                            <div className={`flex items-center gap-2 text-[12px] font-medium mt-2 ${stat.highlight ? 'text-green-300' : 'text-green-600'}`}>
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${stat.highlight ? 'bg-green-700/50' : 'bg-green-100'}`}>
                                    <TrendingUp className="w-3 h-3" />
                                </div>
                                {stat.badge}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProjectCounter;