
import { ArrowUpRight, Plus, Upload, TrendingUp } from 'lucide-react';

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

    return (
        <div className="bg-gray-100  p-6 font-sans">
            <div className="max-w-5xl mx-auto">

           
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-[#1a4d3a] hover:bg-[#1f5c46] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95">
                            <Plus className="w-4 h-4" />
                            Add Project
                        </button>
                        <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-full border border-gray-200 transition-all duration-200 active:scale-95">
                            <Upload className="w-4 h-4" />
                            Import Data
                        </button>
                    </div>
                </div>

            
                <div className="grid grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-5 flex flex-col justify-between min-h-[140px] overflow-hidden ${stat.highlight
                                    ? 'bg-[#1a4d3a] text-white'
                                    : 'bg-white text-gray-900'
                                }`}
                        >
                           
                            <div className="flex items-start justify-between">
                                <span className={`text-sm font-semibold leading-tight ${stat.highlight ? 'text-green-200' : 'text-gray-700'}`}>
                                    {stat.title}
                                </span>
                                <button
                                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${stat.highlight
                                            ? 'border-green-600 bg-green-800/40 hover:bg-green-700/50'
                                            : 'border-gray-200 bg-white hover:bg-gray-50'
                                        }`}
                                >
                                    <ArrowUpRight className={`w-4 h-4 ${stat.highlight ? 'text-white' : 'text-gray-600'}`} />
                                </button>
                            </div>

                            <div className={`text-5xl font-bold tracking-tight ${stat.highlight ? 'text-white' : 'text-gray-900'}`}>
                                {stat.value}
                            </div>

                         
                            <div className={`flex items-center gap-1.5 text-[11px] font-medium ${stat.highlight ? 'text-green-300' : 'text-green-600'}`}>
                                <div className={`w-4 h-4 rounded flex items-center justify-center ${stat.highlight ? 'bg-green-700/50' : 'bg-green-100'}`}>
                                    <TrendingUp className="w-2.5 h-2.5" />
                                </div>
                                {stat.badge}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProjectCounter;