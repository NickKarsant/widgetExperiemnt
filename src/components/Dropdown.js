import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(()=> {

    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)){
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, {capture: true});

    return () => {
      document.body.removeEventListener('click', onBodyClick, {capture: true});
    };  
  }, []);


  const renderedOptions = options.map(option => {
    if (selected.value === option.value){
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  

  return (
    <div className="ui segment">
      <div className="ui form" ref={ref}>
        <div className="field">
          <label className="ui floated left">{label}</label>
          <div onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
            <i className="dropdown icon"></i>
            <div onClick={() => setOpen(!open)} className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
          </div>
        </div>
      </div>

      <div >
        <p
          style={{ color: `${selected.value}` }}
          className={` ${selected.value}`}
        >
        {`This text is ${selected.value}`}
        </p>
      </div> 
    </div>
  );
};

export default Dropdown;


