// import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';

//  Module not used

const AddTask = () => {
   const [item, setItem] = useState('')
    const dispatch=useDispatch()
        const handelOnSubmit=(e)=>
        {
            e.preventDefault();
            const newItem={
                id:Math.random(),
                action:item,
                isDone:false
            }
            item.trim()==="" || item.length>15 ? alert("Please add a text input with length <15"):
        dispatch(addTask(newItem) ) ;
         setItem("")
         
        };
  return (
    <div>
        <form onSubmit={handelOnSubmit}>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}  />
            <button   type="submit" >Add </button>
        </form>
    </div>
  )
}

export default AddTask;