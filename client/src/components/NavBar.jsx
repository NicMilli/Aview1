import React, { useState } from 'react';

const NavBar = ({ languages, selectedLanguage, setSelectedLanguage }) => {
    console.log('HERE====', selectedLanguage)
    const handleChange = (e) => {
        setSelectedLanguage(languages[e.target.value])
    }

    return (
        <div>
            <label className='gradient-text gradient-2'>
                Select a language: 
                <select onChange={handleChange}>
                    {languages.map((lang, index) => (
                        <option value={index} key={lang.code}>{lang.name}</option>
                    ))}
                </select>
            </label>
            
        </div>
    );
}

export default NavBar;