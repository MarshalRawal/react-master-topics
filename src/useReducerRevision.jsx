// import {useReducer} from "react"
// const initialState = {count:0,history:[]};
// function reducer(state,action){
//     switch(action.type){
//         case "Increment":
//         return({...state,count:state.count+1,history:[...state.history,state.count+1]});
//         case "Decrement":
//         return({...state,count:state.count-1,history:[...state.history,state.count-1]});
//         case "Reset":
//         return(initialState);
//         default:
//         return state;
//     }
// }
// export default function Render(){
//     const [state,dispatch] = useReducer(reducer,initialState);
//     return(
//         <>
//         <p>Count: {state.count}</p>
//         <p>History: {(state.history).join(",")}</p>
//         <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
//         <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//         <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
//         </>
//     )

// }

// import {useReducer, useState} from "react";
// const initialState = {item:[],total:0};
// function reducer(state,action){
//   switch(action.type){
//     case "AddItem":{
//     let newArr = [{name:action.name,price:action.price,id:Date.now()}];
//     let updatedArr = [...state.item,...newArr];
//     let totalPrice = updatedArr.reduce((a,b)=>a+b.price,0);
//     return({
//         item:updatedArr,
//         total:totalPrice
//     })
//     }
//     case "DeleteItem":{
//         let updatedArr = state.item.filter((item)=>item.id!=action.id);
//         let totalPrice = updatedArr.reduce((a,b)=>a+b.price,0);
//         return(
//             {item:updatedArr,
//             total:totalPrice
//             }
//         )
//     }
//     case "Edit":{
//         const editedArr = state.item.map((item)=>{
//          if(action.id  == item.id){
//             return {
//                 id:action.id,
//                 name:action.name,
//                 price:action.price
//             }
//          }
//          else{
//             return item
//          }
//         })
//         const totalPrice = editedArr.reduce((a,b)=>a+b.price,0); 
//         return(
//             {item:editedArr,total:totalPrice}
//         )
//     }
//     case "Reset":
//         return initialState;
//     default:
//         return state;
//   }
// }
// export default function Render(){
//     const [state,dispatch] = useReducer(reducer,initialState);
//     const [editId,setEditId] = useState(0);
//     const [editing,setEditing] = useState(false);
//     const [name,setName] = useState("");
//     const [price,setPrice] = useState("");
//     function addTask(){
//         if(!editing){
//         if(!(name&&price)){
//             alert("You need to fill in name and price fields");
//             return 
//         }
//         else{
//             dispatch({type:"AddItem",price:price,name:name})
//             setPrice("");
//             setName("");
//         }
//     }
//     else{
//          if(!(name&&price)){
//             alert("You need to fill in name and price fields");
//             return 
//         }
//         else{
//             dispatch({type:"Edit",price:price,name:name,id:editId})
//             setPrice("");
//             setName("");
//         }
//     }
//     }
//     function editTask(id){
//         setEditing(true);
//         setEditId(id);
//         const itemExists = state.item.find((item)=>id==item.id);
//         if(itemExists){
//             setName(itemExists.name)
//             setPrice(itemExists.price)
      
//         }
//     }
//     return(
//         <>
//         <label htmlFor="">Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label>
//         <label htmlFor="">Price: <input type="text" value={price} onChange={(e)=>setPrice(Number(e.target.value))} /></label>
//         <button onClick={()=>addTask()}>Add Item</button>
//         <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
//         {/* <input type="text" /> */}
//         {state.item.map((sta)=>
//         {
//             return(
//                 <div className="" key={sta.id}>
//                 <p>{sta.name} {sta.price}</p>
//                 <button onClick={()=>dispatch({type:"DeleteItem",id:sta.id})}>Delete</button>
//                 <button onClick={()=>editTask(sta.id)}>Edit</button>
//                 </div>
//             )
//         })}
//         <p>{state.total}</p>
//         </>
//     )
// }

// import {useState,useReducer} from "react"
// const initialState =  [{task:"Code for 4 hours",id:Date.now()}];
// function reducer(state,action){
//    switch(action.type){
//     case "addTask":{
//         const newTask = {task:action.task,id:action.id};
//         return ([...state,newTask]);
//     }
//     case "editTask":{
//       const editArr = state.map((sta)=>{
//         if(sta.id == action.id){
//             return{
//                 task:action.task,
//                 id:action.id,
//             }
//         }
//          else{
//             return sta;
//         }
//       }) 
//       return(editArr);
// }
//    case "deleteTask": {
//     const deleteArr = state.filter((sta)=>sta.id != action.id);
//     return deleteArr;
//    }
//    case "resetTask":{
//     return initialState;
//    }
//    default: {
//  return state;
//    }
//    }
// }
// export default function Render(){
//     const [state,dispatch] = useReducer(reducer,initialState);
//     const [editId,setEditId] = useState(null);
//     const [task,setTask] = useState("");
//     const [edit,setEdit] = useState(false);
//     function addTask(){
//          if(!task){
//             alert("Please Enter a task");
//          }
//          else{
//             if(edit){
//             dispatch({task:task,id:editId,type:"editTask"});
//             setTask("");
//             setEdit(false);
//             }
//             else{
//             dispatch({task:task,id:Date.now(),type:"addTask"});
//             setTask(" ");
//          }
//          }
//     }
//     function editTask(id){
//         setEditId(id);
//         setEdit(true);
//         const findArr = state.find((sta)=>sta.id == id);
//         if(findArr){
//             setTask(findArr.task);
//         } 
//     }
//     return(
//         <>
//         <label htmlFor="">Enter your Task
//          <br />
//         <input type="text"
//         value={task}
//         onChange={(e)=>setTask(e.target.value)}/>
//         </label>
//         <button onClick={()=>addTask()}>Add Task</button>
//         {state.map((sta)=>{
//             return(
//                 <div className="flex" key={sta.id}>
//                 <p>{sta.task}</p>
//                 <button className="ml-2" onClick={()=>editTask(sta.id)}>Edit</button>
//                 <button onClick={()=>dispatch({type:"deleteTask",id:sta.id})}>Delete</button>
//                 </div>
//             )
//         })}
//         <button onClick={()=>dispatch({type:"resetTask"})}>Reset</button>
//         </>
//     )

// }

import {useState,useReact} from "react"
const initialState = {
  categories: [
    {
      id: 1,
      name: "Electronics",
      items: [
        { id: 101, name: "Headphones", price: 100, qty: 1 }
      ]
    },
  ]
}

 