import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { isAuth, authUser } from './store/appSlice'
import { jwtDecode } from 'jwt-decode';
import './App.css'
import AppRouter from './modules/AppRouter/AppRouter';
import Auth from './API/auth';
import Navbar from './modules/navbar/Navbar';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  const setAuth = (state) => dispatch(isAuth(state));
  const setUser = (state) => dispatch(authUser(state));

  useEffect(() => {
    if (localStorage.getItem('isAuthLocal')) {
      const userId = jwtDecode(localStorage.getItem('token')).userId;
      setAuth(JSON.parse(localStorage.getItem('isAuthLocal')))
      Auth.getUserInfo(userId).then(e => setUser(e.data));
    }
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
