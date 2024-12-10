import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import Header from "../../components/header/Header";
import ComplaintPage from "../complaints/ComplaintPage";
import { Card } from "@mui/material";
import RequestPage from "../requests/RequestPage";
import EventPage from "../events/EventPage";

function MainPage() {
    return (
        <div className="flex h-screen">
            <div className="w-[23%] bg-white drop-shadow-xl rounded-lg border border-1 border-gray-300">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col bg-gray-100">
                <Header />
                <div className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Navigate to="/community/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/complaints" element={<ComplaintPage />} />
                        <Route path="/requestServices" element={<RequestPage/>} />
                        <Route path="/events" element={<EventPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
