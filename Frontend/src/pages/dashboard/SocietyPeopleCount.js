import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useSelector } from 'react-redux';

function SocietyPeopleCount() {
    const residents=useSelector(store=>store.flats?.residents);
  return (
    <div className="flex flex-col w-[20%] p-2 space-y-3 bg-violet-300 rounded-md text-violet-600">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{residents?.length}</div>
                <div className='rounded-full bg-white p-0.5'>< PeopleAltIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of People In the Society</div>
        </div>
  )
}

export default SocietyPeopleCount