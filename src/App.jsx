import { useState } from 'react'
import './index.css'
import './index-mobile.css'
import IndexEN from './index-en'
import IndexFI from './index-fi'

function App() {

    const [language, setLanguage] = useState("en")

    if(language=="en"){

        return (
            <IndexEN language={language} setLanguage={setLanguage}/>
        )
    }
    else{
        return(
            <IndexFI language={language} setLanguage={setLanguage}/>
        )
    }
}

export default App
