import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Greek",
    value: "el"
  },
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Armenian",
    value: "hy"
  },
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "Chinese",
    value: "zh"
  },
  {
    label: "Amharic",
    value: "am"
  },
  {
    label: "Danish",
    value: "da"
  },
  {
    label: "Finnish",
    value: "fi"
  },
  {
    label: "Irish",
    value: "ga"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');


  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="ui field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
