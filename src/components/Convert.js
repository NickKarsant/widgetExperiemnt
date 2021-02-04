import React, { useState, useEffect } from 'react';
import axios from 'axios';

const translateKey = process.env.TRANSLATE_API_KEY;

const Convert = ({ text, language}) =>{
  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect((text) => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    }
  }, [text]);



  useEffect((text) => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
      {}, 
        {
          params: {
            q: text,
            target: language.value,

            key: translateKey
          }
        }
      );
      setTranslation(data.data.translations[0].translatedText);
      console.log(data.data.translations[0].translatedText);
    }

    doTranslation();


  }, [debouncedText,language]);



  return (
    <div>
      <h1 className="ui header">{translation} </h1>
    </div>
    );
}

export default Convert;