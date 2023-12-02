import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { isAuth, authUser, isLoadingPage } from './store/appSlice'
import { jwtDecode } from 'jwt-decode';
import './App.css'
import AppRouter from './modules/AppRouter/AppRouter';
import Auth from './API/auth';
import Navbar from './modules/navbar/Navbar';
import { useEffect } from 'react';
import { getCookie } from './utils/utils';


function App() {
  const dispatch = useDispatch();
  const setAuth = (state) => dispatch(isAuth(state));
  const setUser = (state) => dispatch(authUser(state));
  const setLoadingPage = (state) => dispatch(isLoadingPage(state));

  useEffect(() => {
    if (localStorage.getItem('token')) {
      Auth.refresh(localStorage.getItem('token'))
        .then(() => {
          const userId = jwtDecode(localStorage.getItem('token')).userId;
          setAuth(true);
          Auth.getUserInfo(userId).then(e => setUser(e.data));
        })
        .catch(() => {
          Auth.refresh(getCookie('refresh'))
            .then((res) => {
              localStorage.setItem('token', res.data.accessToken);
              const userId = jwtDecode(res.data.accessToken).userId;
              setAuth(true);
              Auth.getUserInfo(userId).then(e => setUser(e.data));
            })
            .catch(e => {
              setAuth(false);
              console.log(e.response.status, e.response.statusText);
            })
        })
    } else if (getCookie('refresh')) {
      Auth.refresh(getCookie('refresh'))
        .then((res) => {
          localStorage.setItem('token', res.data.accessToken);
          const userId = jwtDecode(res.data.accessToken).userId;
          setAuth(true);
          Auth.getUserInfo(userId).then(e => setUser(e.data));
        })
        .catch(e => {
          setAuth(false);
          console.log(e.response.status, e.response.statusText);
        })
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
