import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";



const init={
    todos: [
       {id:1,action: "wake up", isDone:true} ,
       {id:2,action: "Drink coffee", isDone:false} ,
    ],
};
console.log(init)

export const reducer =(state=init,{type,payload}) => {
    // console.log(payload)
    switch (type) {
        case DELETE:
            return {
                ...state,todos:state.todos.filter(el=>el.id!==payload)
            }
        case COMPLETE:
            return {
                ...state,todos:state.todos.map(el=>el.id===payload? {...el,isDone:!el.isDone} : el)
            } 
        case ADD:
            return{
                ...state,todos:[...state.todos,payload]
            }
            // console.log(payload)
        case EDIT:
            return{
             ...state,todos:state.todos.map(el=>el.id===payload.id? {...el,...payload}: el)
             
            }
            // console.log(payload)
        default:
          return  state;
    }
    
    }
    

