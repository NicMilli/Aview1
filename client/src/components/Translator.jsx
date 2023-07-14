import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TextCard from './TextCard';
import Button from './Button';

function Translator({ preference, selectedLanguage, translate }) {
  const [resource, setResource] = useState('');
  const [translatedResource, setTranslatedResource] = useState('Translating...');
  const [loading, setLoading] = useState(true);

  // Fetch the required resource
  const fetchResource = async () => {
    let fact;
    if (preference === 'cat') {
      const res = await axios.get(process.env.CAT_API);
      fact = await res.data.fact;
    } else {
      const res = await axios.get(process.env.DOG_API);
      fact = await res.data.data[0].attributes.body;
    }
    setLoading(() => false);
    setResource(fact);
  };

  // Translate the current fact
  const translateResource = async (text) => {
    const newResource = await translate(text);
    setTranslatedResource(newResource);
  };

  // Fetch a new resource when the preference (cat or dog) changes
  useEffect(() => {
    setLoading(true);
    setTranslatedResource(() => 'Translating...');
    fetchResource();
  }, [preference]);

  // Translate the current resource when a new resource is fetched
  // or the target language is changed
  useEffect(() => {
    if (resource.length > 0) {
      setTranslatedResource(() => 'Translating...');
      translateResource(resource);
    }
  }, [resource, selectedLanguage]);

  return (
    <div className="translator">
      <TextCard text={loading ? 'Loading...' : resource} title="English" />
      <div className="center">
        <Button handleClick={() => {
          setLoading(() => true);
          fetchResource();
        }}
        >
          <FontAwesomeIcon icon={icon({ name: 'rotate-right' })} color="#000017" size="2xl" />
        </Button>
      </div>
      <TextCard text={translatedResource} title={selectedLanguage.name} />
    </div>
  );
}

export default Translator;
