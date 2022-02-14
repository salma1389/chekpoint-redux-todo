import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

const TaskList = () => {
    const {todos} =useSelector(state=> state)
    // console.log (todos)
  return <div>
      {React.Children.toArray(todos.map(el=><TaskCard item={el}/>))}
  </div>;
};

export default TaskList;
