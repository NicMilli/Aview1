import React, { useState } from 'react';

const NavBar = ({ languages, selectedLanguage, setSelectedLanguage }) => {

    return (
        <div>
            <label>
                Select a language: 
                <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)}>
                    {languages.map((lang) => (
                        <option value={lang} key={lang.code}>{lang.name}</option>
                    ))}
                </select>
            </label>
            
        </div>
    );
}

export default NavBar;