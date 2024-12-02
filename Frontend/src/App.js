import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/authentication/Register';
import { ToastContainer } from 'react-toastify';
import Toast from './pages/toasts/Toast';
import HomePage from './pages/homepage/HomePage';
import MainPage from './pages/main/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from './redux/authentication/auth.action';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.auth.isLogged); 
  const jwtToken=useSelector((store)=>store.auth.jwt);
  useEffect(() => {
    if (isLogged) {
      dispatch(getUserDetails()); 
    }
  }, [dispatch, isLogged, jwtToken]);
  return (
    <div className="">
      <ToastContainer/>
      <Routes>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/auth/*" element={<Register/>}/>
        <Route path="/community/*" element={<MainPage/>}/>
      </Routes>
      <Toast/>
    </div>
  );
}

export default App;
