import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TextCard from './TextCard';
import Button from './Button';

const Translator = ({ preference, selectedLanguage, translate }) => {
    const [resource, setResource] = useState('loading...');
    const [translatedResource, setTranslatedResource] = useState('');

    useEffect(() => {
        fetchResource();
    }, [preference])

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
        const translationObj = {
            q: resource,
            source: "en",
            target: selectedLanguage.code,
        }

        const newResource = await translate(translationObj);
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
