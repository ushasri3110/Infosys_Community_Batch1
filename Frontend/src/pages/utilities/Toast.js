import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';

function Toast() {
    const message = useSelector(state => state.auth.message);
    const errorMessage= useSelector(state => state.auth.error);
    const complaintCreated=useSelector(state=>state.complaint.message);
    const complaintClosed=useSelector(state=>state.complaint.closeMessage);
    useEffect(() => {
        if (message) {
            toast.success(message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
        if (complaintClosed) {
            toast.success(complaintClosed, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
        if (complaintCreated) {
            toast.success(complaintCreated, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [message,complaintClosed,complaintCreated]);
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [errorMessage]);
  return (
    <div></div>
  )
}

export default Toast