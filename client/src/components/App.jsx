import React, { useState, useEffect } from 'react';
import Translator from './Translator';
import NavBar from './NavBar';
import axios from 'axios';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

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
                ? <Translator preference={preference} selectedLanguage={selectedLanguage}/>
                : <>
                    <p className='gradient-text gradient-2'>Hello, are you a cat or dog person?</p>
                    <div>
                        <button className='gradient-btn' onClick={() => { setPreference('cat'); } }>
                            <FontAwesomeIcon icon={icon({name: 'cat', size: 'lg'})} color='#000017' size='2xl' />
                        </button>
                        
                        <button className='gradient-btn' onClick={() => { setPreference('dog'); } }>
                            <FontAwesomeIcon icon={icon({name: 'dog',})} color='#000017' size='2xl' />
                        </button>
                    </div>
                    
                </>
            }
        </div>
    );
}