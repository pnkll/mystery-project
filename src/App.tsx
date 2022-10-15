import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './pages/Main/Main'
import { Suspense, useState } from 'react'
import { AboutLazy } from './pages/About/About.lazy'
import useTheme from './theme/useTheme'
import { classNames } from './helpers/classNames'



export default function App() {
    
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Тема</button>
            <BrowserRouter>
                <Link to={'about'}>about</Link>
                <Link to={'main'}>main</Link>
                <Suspense fallback={<>Loading...</>}>
                    <Routes>
                        <Route path='about' element={<AboutLazy />} />
                        <Route path='main' element={<Main />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}