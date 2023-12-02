import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoute, loginRoute } from '../../routes/routes';
import { useSelector } from 'react-redux'

function AppRouter() {
    const isAuthState = useSelector(state => state.app.isAuth);
    const isLoadingPageState = useSelector(state => state.app.isLoadingPage);

    if (isLoadingPageState) {
        return <h1>loading</h1>
    }
    return (
        isAuthState
            ?
            <Routes>
                {privateRoute.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
            :
            <Routes>
                {loginRoute.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
    )

}

export default AppRouter