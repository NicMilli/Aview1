import React, { useState } from 'react';
import Buttons from './Buttons';

const NavBar = ({ languages, setSelectedLanguage, preference, setPreference }) => {

    const handleChange = (e) => {
        setSelectedLanguage(languages[e.target.value])
    }

    return (
        <div className='nav-bar'>
            <label className='color-text'>
                Language: &nbsp;
                <select onChange={handleChange} className='color-select'>
                    {languages.map((lang, index) => (
                        <option className='color-option' value={index} key={lang.code}>{lang.name}</option>
                    ))}
                </select>
            </label>
            
            {preference.length > 0
                ? <Buttons
                    iconSize='3x'
                    setPreference={setPreference}
                    preference={preference}
                />
                : null
            }
        </div>
    );
}

export default NavBar;