import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.scss'
import {ThemeProvider} from 'app/providers/ThemeProvider/index'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<ThemeProvider>
    <App />
</ThemeProvider>)