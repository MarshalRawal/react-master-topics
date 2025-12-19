import { useState } from "react";

// export default function Render(){

//Probelem 1 
//    const initialValue = {
//   projects: [
//     {
//       id: 1,
//       tasks: [
//         { id: 101, title: "Setup", done: false },
//         { id: 102, title: "Deploy", done: false }
//       ]
//     }
//   ]
// }
// const [state,setState] = useState(initialValue);
// function isDone(){
//  const newState = state.projects.map((project)=>{
//     return{...project,tasks:project.tasks.map((task)=>{
//         if(task.id === 102){
//             return {...task,done:true}
//         }
//         return task
//     })}});
// setState({...state,projects:newState});
// console.log(state);
// }
// return (
//     <>
//     <button onClick={isDone}>Done</button>
//     </>
// )

//PROBLEM 3: Update value OR add if missing
// const initialState =  {
//   cart: [
//     { id: 1, qty: 2 },
//     { id: 2, qty: 1 }
//   ]
// }
// const [state,setState] = useState(initialState);
// function addQty(){
//     setState((prevState)=>{
//          const findValue = pretate.cart.find((sta)=>sta.id == 2);
//         let newCart
//         if(findValue){
//             newCart = prevState.cart.map((prev)=>{
//                 if(prev.id === 2){
//                     return {...prev,qty:prev.qty+3};
//                 }
//                 else{
//                     return prev;
//                 }
//             })
//             console.log({...prevState,cart:newCart});
//             return({...prevState,cart:newCart});
//         }
//         else{
//             newCart = [...prevState.cart,{id:2,qty:3}];
//             console.log({...prevState,cart:newCart});
//             return {...prevState,cart:newCart};
//         }
//     }
// )
// }
// return(
//     <>
//     <button onClick={addQty}>Check</button>
//     </>
// )


// PROBLEM 4: Move item between arrays
// const initialState = {
//   todo: [
//     { id: 1, text: "Study" }
//   ],
//   completed: []
// }
// const [state,setState] = useState(initialState);
// function checking(){
// setState((previousState)=>{
//     let todoTask = previousState.todo.find((prev)=>prev.id === 1);
//     if(!todoTask){
//         return previousState
//     }
//     let reaminingTodo = previousState.todo.filter((prev)=>prev.id !== 1);
//     console.log({...previousState,todo:reaminingTodo,completed:[...previousState.completed,todoTask]});
//     return {...previousState,todo:reaminingTodo,completed:[...previousState.completed,todoTask]}
// })}
// return(
//     <>
//     <button onClick={checking}>Check</button>
//     </>
// )
// }