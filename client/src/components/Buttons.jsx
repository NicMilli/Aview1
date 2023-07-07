import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from './Button';

function Buttons({ iconSize, setPreference, preference }) {
  return (
    <div>
      <Button selected={preference === 'cat'} handleClick={() => { setPreference('cat'); }}>
        <FontAwesomeIcon
          icon={icon({ name: 'cat' })}
          color="#000017"
          size={iconSize}
        />
      </Button>

      <Button selected={preference === 'dog'} handleClick={() => { setPreference('dog'); }}>
        <FontAwesomeIcon
          icon={icon({ name: 'dog' })}
          color="#000017"
          size={iconSize}
        />
      </Button>
    </div>
  );
}

export default Buttons;
