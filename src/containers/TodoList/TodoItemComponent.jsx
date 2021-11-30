import React from 'react';
import { useParams } from 'react-router-dom';
import { todolist } from '../../Mock/mock';

const TodoItemComponent = (props) => {
  const params = useParams();
  console.log('params', params);
  const list = todolist()
  
  const targetObject = list.find((item) => (item.id === +params.itemId))
  
  if (!targetObject) {
    return null;
  }

  return (
    <div style={{border: '1px solid #ffffff', padding: '10px'}}>
      <ul>
        <li>
          {targetObject.id}
        </li>
        <li>
          {targetObject.title}
        </li>
        <li>
          {targetObject.description}
        </li>
        <li>
          {targetObject.date}
        </li>
      </ul>
    </div>
  )

}

export default TodoItemComponent