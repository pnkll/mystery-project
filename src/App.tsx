import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './pages/Main/Main'
import { Suspense } from 'react'
import { AboutLazy } from './pages/About/About.lazy'
import useTheme from './theme/useTheme'



export default function App() {
    
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
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