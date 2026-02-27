import Swal from "sweetalert2";


const DownloadMobileApp = () => {
   
    const bgImage = "https://i.ibb.co.com/ksWQ5b2W/Screenshot-51.png";

    const handelDownloadModal = () => {
        Swal.fire("Error","You Are Not Able To Download","error")
        }

    return (
        <div className="flex items-center justify-center min-h-[400px] p-4">
       
            <div
                className="relative w-80 h-[320px] rounded-[40px] overflow-hidden shadow-2xl flex flex-col p-8 text-white bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
           
                <div className="mb-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                   
                        <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow">
                    <h2 className="text-[28px] font-semibold leading-tight mb-2">
                        Download our <br /> Mobile App
                    </h2>
                    <p className="text-sm font-light opacity-80">
                        Get easy in another way
                    </p>
                </div>

           
                <div className="mt-4">
                    <button onClick={handelDownloadModal} className="w-full cursor-pointer py-4 bg-[#14532d] hover:bg-[#1a6336] transition-colors rounded-3xl font-medium text-lg shadow-lg">
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DownloadMobileApp;