import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('token');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (e) {
                console.error("JSON Parse Error");
            }
        }
        setLoading(false);
    }, []);

  
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#16423C]"></div>
                <span className="ml-3 font-bold text-gray-600">Loading...</span>
            </div>
        );
    }


    if (!user || !user.token) {
        
        setTimeout(() => navigate("/login"), 100);
        return null;
    }

   
    return children;
};

export default PrivateRoute;