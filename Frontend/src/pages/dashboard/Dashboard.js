import BlockCard from "./BlockCard";
import BlockCount from "./BlockCount";
import Complaints from "./Complaints";
import FlatCount from "./FlatCount";
import FlatsOccupiedCount from "./FlatsOccupiedCount";
import ParkingPlots from "./ParkingPlots";
import Securities from "./Securities";
import SocietyPeopleCount from "./SocietyPeopleCount";
import UpcomingEvents from "./UpcomingEvents";
import Vendors from "./Vendors";

function Dashboard(){
    const blocks=[1,1]
    return(
        <div className="p-5">
        <div className="flex justify-between mx-5">
            <BlockCount/>
            <FlatCount/>
            <FlatsOccupiedCount/>
            <SocietyPeopleCount/>
        </div>
        <div className="flex p-5 space-x-3 justify-between my-2 flex-wrap space-y-2">
            {blocks.map((items)=>(<BlockCard/>))}
        </div>
        <div className="flex flex-row justify-between mx-5">
            <Complaints/>
            <ParkingPlots/>
            <Vendors/>
            <UpcomingEvents/>
            <Securities/>
        </div>
        </div>
    )
}
export default Dashboard;