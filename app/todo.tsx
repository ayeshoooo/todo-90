"use client"
import React,{useState} from 'react'


export default function Todo() {
    const [todo,setTodo] =useState('')
    const [todos,setTodos] = useState ([
        { todoText:'todo1',completed:false },
        { todoText:'todo2',completed:true },
        { todoText:'todo3',completed:true },
        { todoText:'todo4',completed:false },



    ]);
    const onClickHandler=(meraElm:any) =>{
        console.log("meraElm",meraElm)
        const newTodos = todos.map((todo)=>{
            console.log("todo:",todo)
            if(todo.todoText == meraElm.todoText){
                todo.completed=!todo.completed;
            }
            return todo;

        })
        console.log(newTodos)
        setTodos(newTodos)


    };
    const addTodo =()=>{
        const newTodo = {todoText:todo,completed:false}
        const newTodos =[...todos, newTodo]
        setTodos(newTodos);
    };
    const deleteTodo = (meraTodo : any)=>{
        const newTodos=todos.filter((todo)=>{
            if(todo.todoText == meraTodo.todoText)
            return false;
            return true;
        });
        console.log('old todos',todos,'new todos',newTodos)
        setTodos(newTodos)
        setTodo('')

    };
  return (
    <>
    <div>Todo</div>
    <input placeholder='add todo text' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
    <button onClick={addTodo}>Add</button>
    <ul>
        {todos.map((elm) =>{
            return(
            <li
            style={{color:elm.completed?"green":"orange",fontStyle:"oblique",listStyle:"none"}}
             key={elm.todoText}>
                <input type="checkbox" checked={elm.completed} onChange={()=>onClickHandler(elm)}/>
                {elm.todoText}
                <button onClick={()=>deleteTodo(elm)}>Delete Todo</button>
                </li>
            );
        })}
    </ul>
    </>
  ); 
}