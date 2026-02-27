import React from 'react';
import { Video } from 'lucide-react';
import Swal from 'sweetalert2';

const ProjectsAnalytics = () => {

    const analyticsData = [
        { day: 'S', value: 60, type: 'striped' },
        { day: 'M', value: 80, type: 'solid-green' },
        { day: 'T', value: 70, type: 'light-green', label: '74%' },
        { day: 'W', value: 95, type: 'dark-green' },
        { day: 'T', value: 55, type: 'striped' },
        { day: 'F', value: 50, type: 'striped' },
        { day: 'S', value: 75, type: 'striped' },
    ];

    const handelMeeting = () => {
        Swal.fire("success", "Please Wait For Admin", "success")
    }

    return (
        <div className="flex flex-col xl:flex-row gap-6 w-full">

            {/* 1. Project Analytics Card */}
            <div className=" lg:w-full bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-50 overflow-hidden">
                <h3 className="text-xl font-bold text-gray-900 mb-10 md:mb-8">Project Analytics</h3>

                <div className="overflow-x-auto pb-4 scrollbar-hide md:scrollbar-default">
                    <div className="flex items-end justify-between h-48 min-w-[400px] md:min-w-full gap-2 md:gap-4 px-2">
                        {analyticsData.map((data, index) => (
                            <div key={index} className="flex flex-col items-center flex-1 group min-w-[35px] md:min-w-[40px]">
                                <div className="relative w-full flex items-end justify-center h-40">
                                    <div
                                        style={{ height: `${data.value}%` }}
                                        className={`w-full max-w-[18px] sm:max-w-[24px] md:max-w-[32px] rounded-full transition-all duration-500 relative ${data.type === 'striped' ? 'bg-[#F3F4F6] overflow-hidden' :
                                                data.type === 'solid-green' ? 'bg-[#2D6A4F]' :
                                                    data.type === 'light-green' ? 'bg-[#74C69D]' :
                                                        'bg-[#1B4332]'
                                            }`}
                                    >
                                        {data.type === 'striped' && (
                                            <div className="absolute inset-0 opacity-40"
                                                style={{
                                                    backgroundImage: `linear-gradient(135deg, #9CA3AF 10%, transparent 10%, transparent 50%, #9CA3AF 50%, #9CA3AF 60%, transparent 60%, transparent 100%)`,
                                                    backgroundSize: '10px 10px'
                                                }}>
                                            </div>
                                        )}

                                        {data.label && (
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                                                <span className="bg-[#F3F4F6] text-[10px] font-bold px-2 py-0.5 rounded-md border border-gray-100 text-[#2D6A4F] whitespace-nowrap shadow-sm">
                                                    {data.label}
                                                </span>
                                                <div className="w-2.5 h-2.5 rounded-full border-2 border-white bg-[#74C69D] shadow-sm mt-1"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <span className="mt-4 text-xs md:text-sm font-medium text-gray-400">{data.day}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Reminders Card */}
            <div className="w-full xl:w-[350px] bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-50 flex flex-col justify-between min-h-[250px] md:min-h-[300px] xl:min-h-auto">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Reminders</h3>

                    <div className="space-y-2">
                        <h4 className="text-xl md:text-[22px] font-bold text-[#1B4332] leading-tight">
                            Meeting with Arc Company
                        </h4>
                        <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            Time : 02.00 pm - 04.00 pm
                        </p>
                    </div>
                </div>

                <button
                    onClick={handelMeeting}
                    className="mt-8 w-full cursor-pointer py-4 bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] hover:from-[#2D6A4F] hover:to-[#1B4332] text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-green-900/10 active:scale-[0.98]"
                >
                    <Video size={20} fill="white" />
                    <span className="font-bold text-base">Start Meeting</span>
                </button>
            </div>

        </div>
    );
};

export default ProjectsAnalytics;