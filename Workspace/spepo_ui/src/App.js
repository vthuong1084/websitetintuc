import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/login/Register';
import AdmLayout from './components/layout/AdmLayout';
import { routes } from './components/sidebar/routes';
import { navRoutes } from './components/navbar/navRoutes';
import UserLayout from './components/layout/UserLayout';

import Dashboard from './pages/adm/main/Dashboard';
import Post from './pages/user/nso/Post';
import { AuthProvider } from './components/layout/AuthProvider';
import Home from './pages/user/main/Home';

const App = () => {
    const username = localStorage.getItem("username");

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='/' element={<UserLayout />} >
                        <Route index element={<Home />} />
                        <Route path='post/:id' element={<Post />} />
                        {navRoutes.map((item) => (
                            <Route key={item} path={item.path} element={item.element} />
                        ))}
                    </Route>
                    <Route path='admin' element={username ? <AdmLayout /> : <Navigate to={'/login'} />} >
                        <Route index element={<Dashboard />} />
                        {routes.map((item) => (
                            <Route key={item} path={item.path} element={item.element} />
                        ))}
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    )

}

export default App