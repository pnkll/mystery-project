import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'



export default function App() {
    
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Тема</button>
            <BrowserRouter>
                <Link to={'about'}>about</Link>
                <Link to={'/'}>main</Link>
                <Suspense fallback={<>Loading...</>}>
                    <AppRouter/>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}