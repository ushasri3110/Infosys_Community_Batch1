import { Avatar, Card } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarMenu from "../sidebar/SidebarMenu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from "react-redux";
function Header() {
  const location = useLocation();
  const navigate=useNavigate();
  const user_role=useSelector(store=>store.auth.user);
  const currentMenuItem = SidebarMenu.find(item => `/community/${item.path}` === location.pathname);
  const user=useSelector(store=>store.auth.userDetails)
  return (
    <Card className="py-3 px-5 flex justify-between items-center max-w-screen">
      <div className="text-3xl font-black text-cyan-950">
        {currentMenuItem ? currentMenuItem.item :location.pathname==="/apartment"?"Apartments": user_role?.role==="Admin"?"Admin Profile":"User Profile"}
      </div>
      <div className="flex flex-row space-x-5 text-cyan-950 items-center">
        
        <div className="font-bold text-xl flex items-center cursor-pointer" onClick={()=>navigate("/profile")}><AccountCircleIcon sx={{fontSize:"30px"}}/><span className="px-3">{user?.name}</span></div>
        <div className="cursor-pointer" onClick={()=>navigate("/apartment")}><PeopleAltIcon sx={{fontSize:"30px"}}/></div>
        {location.pathname==="/profile"?<div className="cursor-pointer" onClick={()=>navigate("/community")}><LogoutIcon/></div>:null}
        {location.pathname==="/apartment"?<div className="cursor-pointer" onClick={()=>navigate("/community")}><LogoutIcon/></div>:null}
      </div>
    </Card>
  );
}

export default Header;
