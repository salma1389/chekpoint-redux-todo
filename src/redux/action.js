import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";



export const deleteTask = (id) => {
  return {
      type:DELETE,
      payload:id
  }
};

export const completeTask = (id) =>{
  return {
    type:COMPLETE,
    payload:id,
  }
}

export const addTask = (newadd) =>{
  return {
    type:ADD,
    payload:newadd,
  }
}

export const editTask = (editeditem) =>{
  return {
    type:EDIT,
    payload:editeditem,
  }
}