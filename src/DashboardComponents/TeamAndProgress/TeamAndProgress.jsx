import React from 'react';
import { Plus } from 'lucide-react';

const TeamAndProgress = () => {
    const teamMembers = [
        { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed', color: 'bg-red-200', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra' },
        { name: 'Edwin Adenike', task: 'Integrate User Authentication System', status: 'In Progress', color: 'bg-green-200', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Edwin' },
        { name: 'Isaac Oluwatemilorun', task: 'Develop Search and Filter Functionality', status: 'Pending', color: 'bg-blue-200', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isaac' },
        { name: 'David Oshodi', task: 'Responsive Layout for Homepage', status: 'In Progress', color: 'bg-orange-200', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6  mt-6">

          
            <div className="flex-1 bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-gray-900">Team Collaboration</h3>
                    <button className="flex items-center gap-2 px-4 py-1.5 border border-[#16423C] text-[#16423C] rounded-full text-sm font-semibold hover:bg-gray-50 transition-all">
                        <Plus size={16} />
                        Add Member
                    </button>
                </div>

                <div className="space-y-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${member.color} overflow-hidden`}>
                                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">{member.name}</h4>
                                    <p className="text-[12px] text-gray-400">Working on <span className="font-semibold text-gray-700">{member.task}</span></p>
                                </div>
                            </div>

                       
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-md border ${member.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' :
                                    member.status === 'In Progress' ? 'bg-orange-50 text-orange-400 border-orange-100' :
                                        'bg-red-50 text-red-400 border-red-100'
                                }`}>
                                {member.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

         
            <div className="  bg-white rounded-[40px] p-10 shadow-sm border border-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-10">Project Progress</h3>

                <div className="relative flex flex-col items-center justify-center min-h-[260px]">
                    <div className="relative w-72 h-36">
                        <svg viewBox="0 0 100 55" className="w-full h-full overflow-visible">
                            <defs>
                          
                                <pattern id="fineStripes" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
                                    <line x1="0" y1="0" x2="0" y2="3" stroke="#BDC3C7" strokeWidth="0.8" />
                                </pattern>
                            </defs>

                         
                          
                            <path
                                d="M 10,50 A 40,40 0 0 1 90,50"
                                fill="none"
                                stroke="url(#fineStripes)"
                                strokeWidth="15"
                                strokeLinecap="round"
                            />

                            <path
                                d="M 58,11 A 40,40 0 0 1 78,25"
                                fill="none"
                                stroke="#103D2A"
                                strokeWidth="16"
                                strokeLinecap="round"
                            />

                          
                            <path
                                d="M 10,50 A 40,40 0 0 1 58,11"
                                fill="none"
                                stroke="#1F6E4A"
                                strokeWidth="16"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                   
                    <div className="text-center mt-[-35px] z-10">
                        <h2 className="text-[68px] font-black text-gray-900 leading-none tracking-tight">41%</h2>
                        <p className="text-base font-bold text-[#1F6E4A] mt-2 tracking-wide uppercase opacity-90">Project Ended</p>
                    </div>
                </div>

              
                <div className="flex items-center justify-between space-x-5 mt-10 px-4">
                  
                    <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#1F6E4A]"></div>
                        <span className="text-[13px] font-bold text-gray-400">Completed</span>
                    </div>

                   
                    <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#103D2A]"></div>
                        <span className="text-[13px] font-bold text-gray-400">In Progress</span>
                    </div>

               
                    <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-primary overflow-hidden relative border border-gray-200 shadow-sm">
                            
                            <div
                                className="absolute bg-primary inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, #BDC3C7, #BDC3C7 1px, transparent 1px, transparent 3px)'
                                }}
                            ></div>
                        </div>
                        <span className="text-[13px] font-bold text-gray-400">Pending</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamAndProgress;