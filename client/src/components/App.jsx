import React, { useState, useEffect } from 'react';
import Translator from './Translator';
import NavBar from './NavBar';
import axios from 'axios';

export default function App() {
    const [preference, setPreference] = useState(false);
    const [languages, setLanguages] = useState([{code: 'en', name: 'English'}]);
    const [selectedLanguage, setSelectedLanguage] = useState({code: 'en', name: 'English'});

    useEffect(() => {
        // Fetch possible languages
        getLanguages();
    }, [])

    const getLanguages = async () => {
        const res = await axios.get(`${process.env.TRANSLATION_API}/languages`);
        const languageOptions = await res.data;
        setLanguages(languageOptions);
    }

    return (
        <div id="App">
            <NavBar
                languages={languages}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            {preference
                ? <Translator preference={preference}/>
                : <>
                    <p>Hello, are you a cat or dog person?</p>
                    <button onClick={() => { setPreference('cat'); } }>Cat</button>
                    <button onClick={() => { setPreference('dog'); } }>Dog</button>
                </>
            }
        </div>
    );
}