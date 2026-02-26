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
        Swal.fire("success", "Please  Wait For Admin", "success")
    }

    return (
        <div className="flex  flex-col md:flex-row gap-4 w-full">

            {/* 1. Project Analytics Card */}
            <div className="flex-1  bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Project Analytics</h3>

                <div className="flex items-end justify-between h-48 w-[400px] gap-2">
                    {analyticsData.map((data, index) => (
                        <div key={index} className="flex flex-col  items-center flex-1 group">
                            <div className="relative w-full flex items-end justify-center h-40">

                                {/* বার ডিজাইন */}
                                <div
                                    style={{ height: `${data.value}%` }}
                                    className={`w-full  rounded-full transition-all duration-500 relative ${data.type === 'striped' ? 'bg-[#F3F4F6] overflow-hidden' :
                                            data.type === 'solid-green' ? 'bg-[#2D6A4F]' :
                                                data.type === 'light-green' ? 'bg-[#74C69D]' :
                                                    'bg-[#1B4332]'
                                        }`}
                                >
                                    {/* স্ট্রাইপড প্যাটার্ন (ছবির মতো) */}
                                    {data.type === 'striped' && (
                                        <div className="absolute inset-0 opacity-40"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, #9CA3AF 10%, transparent 10%, transparent 50%, #9CA3AF 50%, #9CA3AF 60%, transparent 60%, transparent 100%)`,
                                                backgroundSize: '10px 10px'
                                            }}>
                                        </div>
                                    )}

                                    {/* ৭৪% এর ওপরের ছোট সার্কেল */}
                                    {data.label && (
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                            <span className="bg-[#F3F4F6] text-[10px] font-bold px-2 py-0.5 rounded-md border border-gray-100 text-[#2D6A4F]">
                                                {data.label}
                                            </span>
                                            <div className="w-2 h-2 rounded-full border-2 border-white bg-[#74C69D] shadow-sm mt-1"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className="mt-4 text-sm font-medium text-gray-400">{data.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Reminders Card */}
            <div className="w-full md:w-[350px]  bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Reminders</h3>

                    <div className="space-y-1">
                        <h4 className="text-[22px] font-bold text-[#1B4332] leading-tight">
                            Meeting with Arc Company0
                        </h4>
                        <p className="text-gray-400 text-sm font-medium">
                            Time : 02.00 pm - 04.00 pm
                        </p>
                    </div>
                </div>

                {/* Start Meeting Button */}
                <button onClick={handelMeeting} className="mt-8 w-full cursor-pointer py-4 bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] hover:opacity-90 text-white rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/10">
                    <Video size={20} fill="white" />
                    <span className="font-bold text-base">Start Meeting</span>
                </button>
            </div>

        </div>
    );
};

export default ProjectsAnalytics;