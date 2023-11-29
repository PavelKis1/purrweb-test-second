import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoute, loginRoute } from '../../routes/routes';

function AppRouter() {
    let isAuth = true;
    return (
        isAuth
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
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
    )

}

export default AppRouter