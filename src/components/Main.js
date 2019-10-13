import React, { useState, useReducer } from 'react';
import '../App.css'

function Main() {

  const [hook, setHook] = useState('')

  const [savedHooks, dispatch] = useReducer((savedHooks, { type, value, i }) => {
    switch (type) {
      case "add":
        return [...savedHooks, value];
      case "edit":
        savedHooks.splice(i, 1, value)
        return [...savedHooks];
      case "remove":
        return savedHooks.filter((_, index) => index !== value);
      default:
        return savedHooks;
    }
  }, []);

  const dispatchSave = () => {
    if (hook !== '') {
      dispatch({ type: "add", value: hook, i: null })
      setHook('')
    }
  }

  const dispatchEdit = (event) => {
    const i = event.currentTarget.name
    const currentLyrics = event.currentTarget.value
    const updatedHook = prompt('Please enter revised hook', currentLyrics)
    if (updatedHook !== '') {
      dispatch({ type: "edit", value: updatedHook, i: i })
      setHook('')
    }
  }

  return (
    <div className="Main">
      <label htmlFor="hook"><b>Enter Hook:</b> <input value={hook} placeholder="Catchy lyrics go here..."
      id="hook" type="text" onChange={(e)=>setHook(e.target.value)} /></label>
      <p>{hook!== '' ? <b>Preview: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>:null}<span>{hook}</span></p>
      <button type="button" onClick={()=>setHook('')}>Clear</button>
      <button type="button" onClick={() => dispatchSave()}>Save</button>
      {savedHooks.map((savedHook, index) => {
        return (
          <div key={index}>
            <h2>Hook #{index+1}</h2>
            <div>"{savedHook}"</div>
            <button className="edit-remove-btn" value={savedHook} name={index} onClick={(e) => dispatchEdit(e)}>Edit</button>
            <button className="edit-remove-btn" onClick={() => dispatch({ type: "remove", value: index, i: index })}>Remove</button>
          </div>
        )
      })}
    </div>
  );
}

export default Main;
