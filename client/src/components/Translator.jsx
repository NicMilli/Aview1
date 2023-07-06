import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TextCard from './TextCard';
import Button from './Button';

const Translator = ({ preference, selectedLanguage, translate }) => {
    const [resource, setResource] = useState('loading...');
    const [translatedResource, setTranslatedResource] = useState('');

    // Fetch a new resource when the preference (cat or dog) changes
    useEffect(() => {
        fetchResource(preference);
    }, [preference])

    // Translate the current resource when a new resource is fetched
    // or the target language is changed
    useEffect(() => {
        setTranslatedResource(() => 'Translating...')
        translateResource(resource);
    }, [resource, selectedLanguage])

    // Fetch the required resource
    const fetchResource = async (target) => {
        if (target === 'cat') {
            const res = await axios.get(process.env.CAT_API);
            const fact = await res.data.fact;
            setResource(fact);
        } else {
            const res = await axios.get(process.env.DOG_API);
            const fact = await res.data.data[0].attributes.body;
            setResource(fact);
        }
    }

    // Translate the current fact
    const translateResource = async (text) => {
        const newResource = await translate(text);
        setTranslatedResource(newResource);
    }

    return (
        <div className='translator'>
            <TextCard text={resource} title='English'/>
            <div className='center'>
                <Button handleClick={fetchResource}>
                    <FontAwesomeIcon icon={icon({name: 'rotate-right',})} color='#000017' size='2xl' />
                </Button>
            </div>
            <TextCard text={translatedResource} title={selectedLanguage.name}/>
        </div>
    );
}

export default Translator;
