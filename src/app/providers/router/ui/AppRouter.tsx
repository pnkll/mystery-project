import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export default function AppRouter() {
    return (
        <>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </>
    )
}