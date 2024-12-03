import { Navigate, Route, Routes} from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import Dashboard from "../dashboard/Dashboard"
import Header from "../../components/header/Header";

function MainPage(){
    return (
        <div className="flex h-screen w-screen">
            <Sidebar/>
            <div className="flex flex-col w-[75%] bg-gray-100">
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/community/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
            </div>
        </div>
    )
}
export default MainPage