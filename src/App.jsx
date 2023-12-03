import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { isAuth, authUser } from './store/appSlice'
import { jwtDecode } from 'jwt-decode';
import './App.css'
import AppRouter from './modules/AppRouter/AppRouter';
import Auth from './API/auth';
import Navbar from './modules/navbar/Navbar';
import { useEffect } from 'react';
import { getCookie } from './utils/utils';
import { useFetch } from './hooks/useFetch'


function App() {
  const dispatch = useDispatch();
  const setAuth = (state) => dispatch(isAuth(state));
  const setUser = (state) => dispatch(authUser(state));

  const isAuthToken = useFetch(async (token) => {
    const res = await Auth.refresh(token);
    localStorage.setItem('token', res.data.accessToken)
    const userId = jwtDecode(res.data.accessToken).userId;
    setAuth(true);
    Auth.getUserInfo(userId).then(e => setUser(e.data));
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      isAuthToken(localStorage.getItem('token'))
        .catch(() => {
          isAuthToken(getCookie('refresh'));
        })
    } else if (getCookie('refresh')) {
      isAuthToken(getCookie('refresh'))
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
