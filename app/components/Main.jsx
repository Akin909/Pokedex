import React from 'react';
import pokeapp from './pokedex.jsx';

var Main = (props) => {
    return (
    <div>
      <div className="">
          <p> Main.jsx rendered </p>
          <pokeapp/>
          {props.children}
        </div>
    </div>
  );
};

module.exports = Main;
