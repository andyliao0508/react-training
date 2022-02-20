import React from 'react';

import Comment, { a } from 'src/components/Comment';
import * as MyModule from './Comment';
console.log(MyModule);

//名稱可自取，但通常使用props作為名稱

const props = {
  author: {
    avatarUrl: 'https://www2.gomaji.com/img/gomajidream.png',
    name: 'Cindy',
  },
  text: 'my comment',
  date: '1995/04/06'
}

// export default function App() {
//   return (
//     <div>
//       <Comment author={props.author} text={props.text} date={props.date} />
//     </div>
//   );
// }
export default function App() {
  return (
    <div>
      <Comment { ...props } age="20" />
      { Comment(props) }
    </div>
  );
}



// Object spread example

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = { firstName: 'Ben', lastName: 'Hector' };
  return <Greeting {...props} />;
}