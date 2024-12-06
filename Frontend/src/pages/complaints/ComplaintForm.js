import React, { useState } from 'react'
import {registerComplaint} from '../../redux/complaint/complaint.action';
import { useDispatch } from 'react-redux';

function ComplaintForm() {
    const [formData, setFormData] = useState({
        personName: "",
        title:"",
        description: ""
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    try {
        dispatch(registerComplaint({ data: formData }));
        setFormData({
            personName: "",
            title: "",
            description: ""
        });
    } catch (error) {
        console.error("Error registering complaint:", error);
    }
    };
  return (
    <div className=''>
        <h1 className='pb-3 font-bold text-xl'>Complaint Form</h1>
        <form className='flex flex-col space-y-2 w-[50%]' onSubmit={handleSubmit}>
        <label htmlFor="personName" className='text-sm'>Name</label>
        <input type="text" id="personName" name="personName" className='focus:outline-none shadow-lg h-10 border border-1 border-gray-300 p-3 rounded-md ' placeholder='Enter your name here' required onChange={handleChange} value={formData.personName} />
        <label htmlFor="title" className='text-sm'>Title</label>
        <input type="text" id="title" name="title" className='focus:outline-none shadow-lg h-10 border border-1 border-gray-300 p-3 rounded-md' placeholder='Enter the title here' required onChange={handleChange} value={formData.title} />
        <label htmlFor="description" className='text-sm'>Description</label>
        <textarea type="text" id="description" name="description" className='focus:outline-none shadow-lg border border-1 border-gray-300 p-3 rounded-md h-[100]' placeholder='Any specific Details'  required onChange={handleChange} value={formData.description} />
        <button type='submit' className='bg-cyan-950 text-white px-2 py-1 rounded-lg w-[25%] mx-auto'>Submit</button>
        </form>
    </div>
  )
}

export default ComplaintForm