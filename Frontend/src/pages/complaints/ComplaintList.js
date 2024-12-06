import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeComplaint } from '../../redux/complaint/complaint.action';

function ComplaintList() {
    const [selectedBlock, setSelectedBlock] = useState("all");
    const [complaints, setComplaints] = useState([]);
    const newComplaint=useSelector(store=>store.complaint.message);
    const closedComplaint=useSelector(store=>store.complaint.closeMessage)
    const dispatch = useDispatch();

    const handleBlockClick = (block) => {
        setSelectedBlock(block);
    };

    const handleClose = (complaintId) => {
        dispatch(closeComplaint(complaintId));
    };

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await fetch('http://localhost:8083/getAllComplaints');
                const data = await response.json();
                setComplaints(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchComplaints();
    }, [closedComplaint,newComplaint]);

    return (
        <div>
            <div className="flex justify-around">
                <button
                    className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "all"
                            ? "bg-cyan-950 text-white"
                            : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("all")}
                >
                    All
                </button>
                <button
                    className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "open"
                            ? "bg-cyan-950 text-white"
                            : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("open")}
                >
                    Open
                </button>
                <button
                    className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "closed"
                            ? "bg-cyan-950 text-white"
                            : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("closed")}
                >
                    Closed
                </button>
            </div>
            <div className="flex flex-col p-3">
                <h1 className="py-3">Complaint List</h1>
                <table className="border-collapse border border-2 border-gray-300">
                    <thead>
                        <tr>
                            <td className="border border-2 border-gray-300 px-2">No</td>
                            <td className="border border-2 border-gray-300 px-2">Name</td>
                            <td className="border border-2 border-gray-300 px-2">Flat No</td>
                            <td className="border border-2 border-gray-300 px-2">Complaint</td>
                            <td className="border border-2 border-gray-300 px-2">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints.length > 0 ? (
                            complaints.map((complaint) => (
                                <tr key={complaint.complaintId}>
                                    <td className="border border-2 border-gray-300 px-2">{complaint.complaintId}</td>
                                    <td className="border border-2 border-gray-300 px-2">{complaint.personName}</td>
                                    <td className="border border-2 border-gray-300 px-2">{complaint.flatNo}</td>
                                    <td className="border border-2 border-gray-300 px-2">{complaint.description}</td>
                                    <td className="border border-2 border-gray-300 px-2">
                                        {complaint.status}
                                        {complaint.status === "Open" && (
                                            <span className="px-2">
                                                <button
                                                    className="bg-red-600 rounded-md px-1 py-0.5 text-white"
                                                    onClick={() => handleClose(complaint.complaintId)}
                                                >
                                                    Close
                                                </button>
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No complaints available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ComplaintList;
