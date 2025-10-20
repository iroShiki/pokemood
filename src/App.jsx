import { useState } from 'react'
import './index.css'
import Index from './index'

function App() {

    const [language, setLanguage] = useState("en")

    return (
        <Index language={language} setLanguage={setLanguage}/>
    )
}

export default App
