import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Translator = ({ preference, selectedLanguage }) => {
    const [resource, setResource] = useState('');

    useEffect(() => {
        fetchResource();
    }, [])

    const fetchResource = async () => {
        const url = preference === 'cat' ? process.env.CAT_API : process.env.DOG_API;
        const res = await axios.get();
    }

    return (
        <div>
            Translate {preference}
        </div>
    );
}

export default Translator;
