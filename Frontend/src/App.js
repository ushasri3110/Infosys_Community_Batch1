import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/authentication/Register';
import { ToastContainer } from 'react-toastify';
import Toast from './pages/utilities/Toast';
import HomePage from './pages/homepage/HomePage';
import MainPage from './pages/main/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminDetails, getUser, getUserDetails } from './redux/authentication/auth.action';
import { useEffect } from 'react';
import UserProfile from './components/profile/UserProfile';
import ApartmentsPage from './pages/apartments/ApartmentsPage';
function App() {
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");
  const isLogged=useSelector(store=>store.auth.isLogged)
  const user=useSelector(store=>store.auth.user)
  const loading=useSelector(store=>store.auth.loading)
  useEffect(() => {
    if (jwt != null) {
      console.log("getUser");
      dispatch(getUser(jwt));
    }
  }, [jwt, isLogged]);
  
  useEffect(() => {
    if (jwt != null && user?.role) {
      console.log("getUserDetails");
      if (user.role === "Resident") {
        console.log("Resident role detected:", user.role);
        dispatch(getUserDetails(jwt));
      } else if (user.role === "Admin") {
        console.log("Admin role detected:", user.role);
        dispatch(getAdminDetails(jwt));
      }
    }
  }, [jwt, isLogged, user]);
  
  return (
    <div className="">
      <ToastContainer/>
      <Routes>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/auth/*" element={<Register/>}/>
        <Route path="/community/*" element={<MainPage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path="/apartment" element={<ApartmentsPage/>}/>
      </Routes>
      <Toast/>
    </div>
  );
}

export default App;
