import React, { useState, useEffect } from 'react';
import Translator from './Translator';
import NavBar from './NavBar';
import Buttons from './Buttons';
import TextCard from './TextCard';
import axios from 'axios';
import '../index.css';

export default function App() {
    const englishGreeting = { text: 'This app provides facts about your pets that can be translated into 20 different languages! \n Are you a cat or dog person?', title: 'Welcome'};
    const [preference, setPreference] = useState(false);
    const [languages, setLanguages] = useState([{code: 'en', name: 'English'}]);
    const [selectedLanguage, setSelectedLanguage] = useState({code: 'en', name: 'English'});
    const [greeting, setGreeting] = useState(englishGreeting);

    useEffect(() => {
        // Fetch possible languages
        getLanguages();
    }, [])

    useEffect(() => {
        if (selectedLanguage.code === 'en') {
            setGreeting(englishGreeting);
        } else {
            translateGreeting(englishGreeting);
        }
    }, [selectedLanguage])

    const translateGreeting = async (greeting) => {
        const newText = await translate(greeting.text);
        const newTitle = await translate(greeting.title);
        if (newTitle !== 'Error fetching your fact' && newText !== 'Error fetching your fact') {
            setGreeting({ text: newText, title: newTitle });
        }
    }

    const getLanguages = async () => {
        try {
            const res = await axios.get(`${process.env.TRANSLATION_API}/languages`);
            const languageOptions = await res.data;
            setLanguages(languageOptions);
        } catch (err) {
            setLanguages([{code: 'en', name: 'English'}])
        }
    }

    const translate = async (resource) => {
        const translationObj = {
            q: resource,
            source: "en",
            target: selectedLanguage.code,
        };
        try {
            const res = await axios.post(`${process.env.TRANSLATION_API}/translate`, translationObj);
            const newResource = await res.data.translatedText;
            return newResource;
        } catch (err) {
            return 'Error fetching your fact'
        }
    }

    return (
        <div id="App">
            <NavBar
                languages={languages}
                preference={preference}
                setSelectedLanguage={setSelectedLanguage}
                setPreference={setPreference}
            />
            <div className='center'>
                {preference.length > 0
                    ? <Translator
                        preference={preference}
                        selectedLanguage={selectedLanguage}
                        translate={translate}
                    />
                    : <div>
                        <TextCard text={greeting.text} title={greeting.title} />
                        <div className='center'>
                            <Buttons iconSize='8x' setPreference={setPreference}/> 
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}