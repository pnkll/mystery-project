import './index.scss'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './Pages/Main/Main'
import { Suspense } from 'react'
import { AboutLazy } from './Pages/About/About.lazy'

export default function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Link to={'about'}>about</Link>
                <Link to={'main'}>main</Link>
                <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path='about' element={<AboutLazy />} />
                    <Route path='main' element={<Main/>} />
                </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}