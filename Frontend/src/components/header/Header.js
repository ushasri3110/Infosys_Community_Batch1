import { Card } from "@mui/material";
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
  const currentMenuItem = SidebarMenu.find(item => `/community/${item.path}` === location.pathname);
  const user=useSelector(store=>store.auth.userDetails)
  return (
    <Card className="py-3 px-5 flex justify-between items-center">
      <div className="text-3xl font-extrabold">
        {currentMenuItem ? currentMenuItem.item : "User Profile"}
      </div>
      <div className="flex flex-row space-x-5 text-cyan-950">
        <div className="font-bold text-xl"><span className="px-3">{user?.name}</span></div>
        <div className="cursor-pointer" onClick={()=>navigate("/profile")}><PeopleAltIcon/></div>
        {location.pathname==="/profile"?<div className="cursor-pointer" onClick={()=>navigate("/community")}><LogoutIcon/></div>:null}
      </div>
    </Card>
  );
}

export default Header;
