import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Translator = ({ preference, selectedLanguage }) => {
    const [resource, setResource] = useState('');
    const [translatedResource, setTranslatedResource] = useState('');

    useEffect(() => {
        fetchResource();
    }, [])

    useEffect(() => {
        setTranslatedResource(() => 'Translating...')
        translateResource();
    }, [resource, selectedLanguage])

    const fetchResource = async () => {
        if (preference === 'cat') {
            const res = await axios.get(process.env.CAT_API);
            const fact = await res.data.fact;
            setResource(fact);
        } else {
            const res = await axios.get(process.env.DOG_API);
            const fact = await res.data.data[0].attributes.body;
            setResource(fact);
        }
    }

    const translateResource = async () => {
        if (resource.length > 0) {
                const translation = {
                q: resource,
                source: "en",
                target: selectedLanguage.code,
            }

            const res = await axios.post(`${process.env.TRANSLATION_API}/translate`, translation);
            const newResource = await res.data.translatedText;
            setTranslatedResource(newResource);
        }
        
    }

    return (
        <div>
            <span className='gradient-text gradient-2'>{resource}</span>
            <br/>
            <button onClick={fetchResource}>Redo</button>
            <br/>
            <span className='gradient-text gradient-2'>{translatedResource}</span>
        </div>
    );
}

export default Translator;
