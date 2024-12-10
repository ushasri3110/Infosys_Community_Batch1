import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Zoom , toast } from 'react-toastify';

function Toast() {
    const message = useSelector(state => state.auth.message);
    const errorMessage= useSelector(state => state.auth.error);
    const complaintCreated=useSelector(state=>state.complaint.complaintCreatedMessage);
    const complaintClosed=useSelector(state=>state.complaint.closeMessage);
    const vendorAdded=useSelector(state=>state.request.message);
    const requestService=useSelector(state=>state.request.requestService);
    const requestServiceError=useSelector(state=>state.request.requestServiceError);
    const eventAddSuccess=useSelector(state=>state.event?.message)
    const eventAddFailure=useSelector(state=>state.event?.error)
    useEffect(() => {
        if (message) {
            toast.success(message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (complaintClosed) {
            toast.success(complaintClosed, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (complaintCreated) {
            toast.success(complaintCreated, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (vendorAdded) {
            toast.success(vendorAdded, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (requestService) {
            toast.success(requestService, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (eventAddSuccess) {
            toast.success(eventAddSuccess, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
    }, [message,complaintClosed,complaintCreated,vendorAdded,requestService,eventAddSuccess]);
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (requestServiceError) {
            toast.error(requestServiceError, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (eventAddFailure) {
            toast.error(eventAddFailure, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
    }, [errorMessage,requestServiceError,eventAddFailure]);
  return (
    <div></div>
  )
}

export default Toast