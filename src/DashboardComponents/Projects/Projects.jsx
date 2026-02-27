import React from 'react';
import { Plus, ShieldCheck, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Projects = () => {
    const projectList = [
        {
            name: 'Develop API Endpoints',
            date: 'Nov 26, 2024',
           
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M7 11L11 7M11 17L17 11M14 14L18 10" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="17" cy="7" r="2" fill="#3B82F6" />
                </svg>
            )
        },
        {
            name: 'Onboarding Flow',
            date: 'Nov 28, 2024',
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <circle cx="12" cy="12" r="8" fill="#14B8A6" fillOpacity="0.2" />
                    <circle cx="12" cy="12" r="4" fill="#14B8A6" />
                    <path d="M12 4V8M12 16V20" stroke="#14B8A6" strokeWidth="2" />
                </svg>
            )
        },
        {
            name: 'Build Dashboard',
            date: 'Nov 30, 2024',
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M5 12C5 8 8 5 12 5S19 8 19 12S16 19 12 19S5 16 5 12Z" fill="#F97316" fillOpacity="0.2" />
                    <path d="M12 8L8 12L12 16L16 12L12 8Z" fill="#F97316" />
                </svg>
            )
        },
        {
            name: 'Optimize Page Load',
            date: 'Dec 5, 2024',
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M12 5C7 5 3 12 3 12C3 12 7 19 12 19C17 19 21 12 21 12C21 12 17 5 12 5Z" fill="#FACC15" fillOpacity="0.2" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FACC15" />
                </svg>
            )
        },
        {
            name: 'Cross-Browser Testing',
            date: 'Dec 6, 2024',
            icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <circle cx="12" cy="18" r="3" fill="#8B5CF6" />
                    <circle cx="8" cy="12" r="3" fill="#6D28D9" />
                    <circle cx="16" cy="12" r="3" fill="#4C1D95" />
                </svg>
            )
        },
    ];

    const {data: projects, isLoading } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axios("https://task-api-eight-flax.vercel.app/api/products")

            return res.data
        }
    })
 

    if(isLoading) return <div>loading...</div>
    console.log(projects)

    return (
        <div className="bg-white rounded-[40px] p-4 shadow-sm border border-gray-100 max-w-md">
          
            <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Project</h3>
                <button className="flex cursor-pointer items-center gap-1 px-4 py-1.5 border border-[#16423C] text-[#16423C] rounded-full text-sm font-semibold hover:bg-gray-50 transition-all">
                    <Plus size={16} /> New
                </button>
            </div>

          
            {/* <div className="space-y-10">
                {projectList.map((project, index) => (
                    <div key={index} className="flex items-start gap-6 group cursor-pointer">
                       
                        <div className="flex-shrink-0 mt-1">
                            {project.icon}
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-lg font-bold text-gray-900 leading-none mb-1.5">
                                {project.name}
                            </h4>
                            <p className="text-[14px] font-medium text-gray-400">
                                Due date: <span className="text-gray-300 font-normal">{project.date}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="space-y-10">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-6">
                        <div className="relative overflow-hidden group flex items-center justify-between p-2 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">

                          
                            <div className="flex items-center gap-5 z-10">
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-900/10 group-hover:scale-110 transition-transform duration-500">
                                    <ShieldCheck size={28} />
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2 py-0.5 bg-green-50 text-[#2D6A4F] text-[10px] font-bold uppercase tracking-wider rounded-md border border-green-100">
                                            {project.category}
                                        </span>
                                        <span className="text-gray-300 text-[10px] font-medium">ID: #{project.id}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#1B4332] transition-colors">
                                        {project.name}
                                    </h4>
                                    <div className="flex items-center gap-4 mt-1">
                                        <p className="text-sm font-bold text-gray-900">
                                            ${project.price} <span className="text-gray-400 font-medium text-xs">/month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                           <div className="flex flex-col items-end z-10">
                                <div className="flex items-center gap-1.5 text-[#2D6A4F] mb-1">
                                    <TrendingUp size={14} />
                                    <span className="text-xs font-black">{project.sales} Sales</span>
                                </div>
                                
                                <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#74C69D] rounded-full"
                                        style={{ width: `${(project.sales / 150) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-[10px] text-gray-400 mt-1 font-medium">Monthly Target</p>
                            </div>

                            {/* হোভার ইফেক্ট এর জন্য ব্যাকগ্রাউন্ড ডেকোরেশন */}
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-50/50 rounded-full blur-3xl group-hover:bg-green-100/60 transition-colors duration-500"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;