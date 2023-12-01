import { useDispatch } from 'react-redux'
import { authUser, isAuth } from '../../store/appSlice'
import { useNavigate } from 'react-router-dom'
import Auth from '../../API/auth';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setAuth = (state) => dispatch(isAuth(state));
  const setUser = (decoded) => dispatch(authUser(decoded));

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => {
        Auth.login("admin@admin.com", "password123Q")
          .then(async (res) => {
            localStorage.setItem('token', res.data.accessToken);
            const userId = jwtDecode(localStorage.getItem('token')).userId;
            Auth.getUserInfo(userId)
              .then(res => setUser(res.data))
            setAuth(true);
          })
          .catch(e => console.log(e))
      }
      }>
        Войти
      </button>
      <button onClick={() => navigate('/register')}>
        Register
      </button>
    </div >
  )
}

export default Login