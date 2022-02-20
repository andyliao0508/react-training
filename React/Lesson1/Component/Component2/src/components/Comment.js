import React from 'react';

import UserInfo from './UserInfo';

function formatDate() {
  return '2018/11/20'
}

export function a() {
  return 'a';
}

export default function Comment(props) {

  return (
    <div className="Comment">
      <UserInfo {...props.author} />
      {/* <UserInfo url={props.author.url} name={props.author.name} /> */}
      
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}