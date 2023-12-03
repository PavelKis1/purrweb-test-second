import { useDispatch } from 'react-redux'
import { authUser, isAuth } from '../../store/appSlice'
import Auth from '../../API/auth';
import { jwtDecode } from 'jwt-decode';
import LoginForm from '../../components/form/LoginForm';

function Login() {
  const dispatch = useDispatch();
  const setAuth = (state) => dispatch(isAuth(state));
  const setUser = (decoded) => dispatch(authUser(decoded));

  return (
    <div className='container'>
      <div className="login__wrap">
        <LoginForm onSubmit={(email, password) => {
          Auth.login(email, password)
            .then(async (res) => {
              localStorage.setItem('token', res.data.accessToken);
              document.cookie = 'refresh=' + res.data.refreshToken;
              const userId = jwtDecode(res.data.accessToken).userId;
              Auth.getUserInfo(userId)
                .then(res => setUser(res.data))
              setAuth(true);
            })
            .catch(e => console.log(e))
        }
        } />
      </div>
    </div >
  )
}

export default Login