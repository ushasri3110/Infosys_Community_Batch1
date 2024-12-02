import LogoutIcon from '@mui/icons-material/Logout';
import SidebarMenu from "./SidebarMenu";
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/auth");
    };

    return (
        <Card className="w-[25%] static">
            <div className="flex justify-center">
                <img src="https://i.ibb.co/8MnzPDm/freepik-background-85678.png" className="w-[70px]" />
            </div>
            <div className="flex flex-col cursor-pointer text-cyan-950">
                {SidebarMenu.map((item, index) => (
                    <div
                        key={index}
                        className={`px-5 py-2 rounded-lg mx-3 ${
                            location.pathname === `/community/${item.path}`
                                ? "bg-gradient-to-r from-cyan-950 to-cyan-500 text-white"
                                : "hover:bg-gray-100"
                        }`}
                        onClick={() => navigate(`/community/${item.path}`)}
                    >
                        {item.icon}
                        <span className="px-4">{item.item}</span>
                    </div>
                ))}
            </div>
            <div
                className="absolute bottom-5 mx-3 text-cyan-950 cursor-pointer hover:bg-gray-100 px-5 py-2"
                onClick={handleLogout}
            >
                <LogoutIcon />
                <span className="px-4">Logout</span>
            </div>
        </Card>
    );
}

export default Sidebar;
