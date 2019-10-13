import React, { useState, useReducer } from 'react';
import '../App.css';

function Header() {

  return (
    <div className="Header">
      <h1>Hooks with Hooks</h1>
      <h3>Add your favorite song hooks to keep track of</h3>
      <h5><i>Powered by the new React Hooks API</i></h5>
    </div>
  );
}

export default Header;
