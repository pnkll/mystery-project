import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { Theme } from './theme/ThemeContext'
import ThemeProvider from './theme/ThemeProvider'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<ThemeProvider>
    <App />
</ThemeProvider>)