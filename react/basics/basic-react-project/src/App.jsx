// import {useState} from 'react';

// function App() {
//   let [count,setCount] = useState(0);

//   function incrimentCounter(){
//     // setCount(count + 1)
//     setCount(count => count + 1)
//   }

//   return (
//     <div>
//       <button onClick={incrimentCounter}>Counter : {count}</button>
//     </div>
//   )
// }

// export default App

// import {useState} from 'react';

// function App(){
//   const [count, setCount] = useState(0);
//   return (<>
//     <Button count = {count} setCount = {setCount}></Button>
//   </>)
// }

// function Button(props) {
//   function incriment() {
//     props.setCount(props.count + 1);
//   }

//   return (<button onClick={incriment}>Counter : {props.count}</button>)
// }

// export default App;


import { useState } from "react";

function App() {
  let [todo, setTodo] = useState([{
    title:'new todo',
    description:'todo description'
  }, {
    title : 'new todo',
    description : 'todo description'
  }])

  return (
    <>
      <AddTodo todo = {todo} setTodo = {setTodo} />
      {todo.map(function(todo){
        return(<><Todo todo = {todo} /></>)
      })}
    </>
  )
}

function AddTodo(props) {
  function onClickHandler(){
    props.setTodo([...props.todo , {
      title : "new Todo",
      description : 'new todo description'
    }])
  }
  return(
    <button onClick={onClickHandler}>Add ToDo</button>
  )
}
function Todo(props) {
  return (
    <>
    <div>{props.todo.title}</div>
    <div>{props.todo.description}</div>
    </>
  )
}

export default App;
