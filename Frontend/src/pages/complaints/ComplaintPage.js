import React, { useEffect, useState } from 'react'
import TotalComplaints from './TotalComplaints'
import ComplaintsSolved from './ComplaintsSolved'
import ComplaintsUnsolved from './ComplaintsUnsolved'
import BlockAComplaints from './BlockAComplaints'
import BlockBComplaints from './BlockBComplaints'
import ComplaintForm from './ComplaintForm'
import { useSelector } from 'react-redux'
import ComplaintList from './ComplaintList'

function ComplaintPage() {
    const [complaintsTotal,setComplaintsTotal]=useState(0);
    const [solvedComplaints,setSolvedComplaints]=useState(0);
    const [unsolvedComplaints,setUnsolvedComplaints]=useState(0);
    const [complaintsBlockA,setComplaintsBlockA]=useState(0);
    const [complaintsBlockB,setComplaintsBlockB]=useState(0);
    const role=useSelector(store=>store.auth.user?.role);
    useEffect(()=>{
        const fetchComplaints=async()=>{
            try{
                const response=await fetch('http://localhost:8083/getAllComplaints');
                const data=await response.json();
                setComplaintsTotal(data.length);
                const solved=data.filter(c=>c.status==="Closed")
                setSolvedComplaints(solved.length);
                const unsolved=data.filter(c=>c.status==="Open")
                setUnsolvedComplaints(unsolved.length);
                const blockA=data.filter(c=>c.flatNo[0]==="A")
                setComplaintsBlockA(blockA.length);
                const blockB=data.filter(c=>c.flatNo[0]==="B")
                setComplaintsBlockB(blockB.length);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchComplaints();
    },[])
    return (
        <div className='py-5 gap-2'>
            <div className='flex flex-wrap gap-3 justify-center'>
                <div className="w-1/6">
                    <TotalComplaints complaintsTotal={complaintsTotal} />
                </div>
                <div className="w-1/6">
                    <ComplaintsSolved solvedComplaints={solvedComplaints}/>
                </div>
                <div className="w-1/6">
                    <ComplaintsUnsolved unsolvedComplaints={unsolvedComplaints} />
                </div>
                <div className="w-1/6">
                    <BlockAComplaints complaintsBlockA={complaintsBlockA} />
                </div>
                <div className="w-1/6">
                    <BlockBComplaints complaintsBlockB={complaintsBlockB}/>
                </div>
            </div>
            <div className='px-10 py-5'>
                {role==="Admin"?<ComplaintList/>:role==="Resident"?<ComplaintForm/>:null}
            </div>
        </div>
    )
}

export default ComplaintPage