import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/appSlice'

function Home() {
    const dispatch = useDispatch();
    const logoutUser = () => dispatch(logout())
    const user = useSelector(state => state.app.user);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logoutUser}>
                Выйти
            </button>
            <p>Пользователь {user.name}</p>
        </div>
    )
}

export default Home