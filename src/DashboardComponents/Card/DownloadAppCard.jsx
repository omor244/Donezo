const DownloadAppCard = () => {
    return (
        <div className="mt-auto relative w-full aspect-square max-h-[240px] rounded-[32px] p-6 overflow-hidden group bg-[#061412]">

        
            <div className="absolute inset-0 opacity-60">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150">
                    <path
                        d="M 0,160 C 40,140 60,60 120,80 C 180,100 200,40 200,20"
                        stroke="#219B60"
                        strokeWidth="0.5"
                        fill="none"
                        className="opacity-30"
                    />
                    <path
                        d="M 0,180 C 50,160 80,80 140,100 C 200,120 220,60 220,40"
                        stroke="#219B60"
                        strokeWidth="0.5"
                        fill="none"
                        className="opacity-20"
                    />
                    <path
                        d="M -20,200 C 30,180 60,100 120,120 C 180,140 200,80 200,60"
                        stroke="#219B60"
                        strokeWidth="0.8"
                        fill="none"
                        className="opacity-40"
                    />
                </svg>
            </div>

        
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#219B60] opacity-40 blur-[50px] -mr-8 -mt-8"></div>

        
            <div className="relative z-10 flex flex-col h-full">

           
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16423C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                </div>

                <h5 className="text-white text-[18px] font-bold leading-[1.2] tracking-tight">
                    Download our<br />Mobile App
                </h5>
                <p className="text-gray-400 text-[11px] mt-2 font-medium">
                    Get easy in another way
                </p>

              
                <button className="mt-auto w-full py-3 bg-[#16423C] hover:bg-[#219B60] text-white text-[13px] font-bold rounded-[22px] transition-all duration-300 shadow-xl border border-white/5">
                    Download
                </button>
            </div>
        </div>
    );
};

export default DownloadAppCard;