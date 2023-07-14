import React from 'react';
import Buttons from './Buttons';

function NavBar({
  languages, setSelectedLanguage, preference, setPreference, setArrayIndex, arrayIndex
}) {
  const handleChange = (e) => {
    setArrayIndex(e.target.value);
    setSelectedLanguage(languages[e.target.value]);
  };

  return (
    <div className="nav-bar">
      <label className="color-text" htmlFor="language">
        Language: &nbsp;
        <select onChange={handleChange} className="color-select" name="language" value={arrayIndex}>
          {languages.map((lang, index) => (
            <option className="color-option" value={index} key={lang.name}>{lang.name}</option>
          ))}
        </select>
      </label>

      {preference.length > 0
        ? (
          <Buttons
            iconSize="3x"
            setPreference={setPreference}
            preference={preference}
          />
        )
        : null}
    </div>
  );
}

export default NavBar;
