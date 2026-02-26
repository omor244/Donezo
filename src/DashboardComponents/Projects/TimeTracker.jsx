import React from 'react';

const TimeTracker = () => {
    // Corrected Direct Link
    const bgImage = "https://i.ibb.co.com/YgnjN7H/Screenshot-48.png";

    return (
        <div className="flex items-center justify-center min-h-[300px] p-4">
            {/* Main Card */}
            <div
                className="relative w-80 h-52 rounded-[32px] overflow-hidden shadow-2xl flex flex-col p-6 text-white bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
                {/* Header Text */}
                <span className="text-lg font-medium opacity-90">Time Tracker</span>

                {/* Timer Display */}
                <div className="flex-grow flex items-center justify-center">
                    <h1 className="text-5xl font-semibold tracking-tight">01:24:08</h1>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-2">
                    {/* Pause Button */}
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-lg">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-4 bg-[#1a3a2a] rounded-full"></div>
                            <div className="w-1.5 h-4 bg-[#1a3a2a] rounded-full"></div>
                        </div>
                    </button>

                    {/* Stop Button */}
                    <button className="w-12 h-12 bg-[#cc3333] rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-lg border-none">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeTracker;