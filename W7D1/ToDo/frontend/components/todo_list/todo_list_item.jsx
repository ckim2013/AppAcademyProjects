import React from 'react';

// export const TodoListItem = ({todo}) => (
//     <li key={todo.id}>{todo.title}</li>
//   );

 // NOTE: FIX THIS UGLY MESS
class TodoListItem extends React.Component {
  render() {
  return (
    <li>
      {todo.title}
      <button onClick=""></button>
    </li>
  );
}
}
// export const TodoListItem = ({todo, removeFunction}) => {
//   console.log(todo);
//   console.log(removeFunction);
//   return (
//     <li>
//       {todo.title}
//       <button onClick=""></button>
//     </li>
//   );
// };
