import {createContext,useContext} from 'react'

export const ToDoContext=createContext({
    todos: [
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addToDo: (todo)=>{},
    updateToDo: (todo,id)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id)=>{},
})

export const useTodo=()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider=ToDoContext.Provider
