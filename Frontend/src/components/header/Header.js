import { Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import SidebarMenu from "../sidebar/SidebarMenu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";
function Header() {
  const location = useLocation();
  const currentMenuItem = SidebarMenu.find(item => `/community/${item.path}` === location.pathname);
  const user=useSelector(store=>store.auth.userDetails)
  return (
    <Card className="py-3 px-5 flex justify-between items-center">
      <div className="text-3xl font-extrabold">
        {currentMenuItem ? currentMenuItem.item : "Dashboard"}
      </div>
      <div className="flex flex-row space-x-5">
        <div className="font-bold text-xl"><span className="px-3">Usha Sri</span></div>
        <div className="cursor-pointer"><PeopleAltIcon/></div>
      </div>
    </Card>
  );
}

export default Header;
