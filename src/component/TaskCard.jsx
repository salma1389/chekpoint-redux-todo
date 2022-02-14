import { Button, Stack } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../redux/action';
import Edit from './Edit';

const TaskCard = ({item}) => {
 const dispatch=useDispatch()
    // console.log(item)
  return <div className='card'>

   
      <h1 className={item.isDone?'completeClass':'undoClass'}>{item.action}</h1>

      <Stack direction="row" spacing={2}  justifyContent="center">
      <Button className='btn' variant="contained" onClick={()=>dispatch(deleteTask(item.id))}>Delete  </Button>
      <Button className='btn' variant="contained"  onClick={()=>dispatch(completeTask(item.id))}>{item.isDone?"complete":"undo"}</Button>
      </Stack>
      <hr />
     <Edit item={item}/>
  </div>;
};

export default TaskCard;
