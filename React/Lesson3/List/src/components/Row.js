import React from 'react';

import Button from './Button';

export default function Row(props) {
  return (
    <div className={props.class}>
      {props.words.map(function(word, index){
          return (
            <button className="btn" onClick={props.click} key={index}>
              {word}
            </button>
          );
          // return <Button key={idx} click={props.click} content={word} />
        })
      }
    </div>
  );
}