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

import {useState,useReducer,} from "react"
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
function reducer(state,action){
    switch(action.type){
      case "addCategory":{
        const newName = {id:action.id,
            name:action.name,
            items:[] 
        }
        const newArr = [...state.categories,newName];
        return({...state,categories:newArr});
      }
    case "deleteCategory":{
       const filterState = state.categories.filter((sta)=>sta.id !== action.id);
       return({...state,categories:filterState});
    }
    case "editCategory":{
      const editedArr = state.categories.map((sta)=>{
        if(sta.id === action.id){
          return({
            ...sta,
            name:action.name
          })
        }
        else{
          return sta;
        }
      })
       return({...state,categories:editedArr});
    }
    case "addItem": {
        const newItem = {id:action.itemId,name:action.itemName,price:action.itemPrice,qty:action.itemQty};
        const newArr = state.categories.map((sta)=>{
        if(action.catId === sta.id){
            return {...sta,items:[...sta.items,newItem]};
        }
    else{
        return sta;
    }})
    return ({...state,categories:newArr});
    //     if(action.name == state.categories.name){
    //     const updatedItem = [...state.categories,newItem]
    // }
    }
    case "deleteItem":{
      const updatedItem = state.categories.map((sta)=>{
        if(sta.id === action.catId){
        const uItem = sta.items.filter((st)=>st.id !== action.id)
        return({...sta,items:uItem});
        }
        else{
          return sta;
        }
      })
     return({...state,categories:updatedItem})
    }
    case "editItem":{
     const editedItem = state.categories.map((sta)=>{
      if(sta.id === action.catId){
     const eItem = sta.items.map((st)=>{
        if(st.id === action.id){
          return({...st,name:action.name,price:action.price,qty:action.qty});
        }
        else{
          return st
        }
      })
      return {...sta,items:eItem};
      }
      else{
        return sta
      }
     })
         return({...state,categories:editedItem})}
    default:{
      return state;
    }
    }
}
export default function Render(){
  const [display,setDisplay] = useState(false); 
  const [isEdit,setisEdit] = useState(false);
  const [editItems,setEditItems] = useState(false);
  const [isEditId,setisEditId] = useState(null);
  const [editItemId,setEditItemId] = useState({catId:"",id:""})
    const [name,setName] = useState("");
    const [itemName,setItemName] = useState("");
    const [itemPrice,setItemPrice] = useState("");
    const [itemQuantity,setItemQuantity] = useState("");
    const [categoryId,setCategoryId] = useState(null);
    const [state,dispatch] = useReducer(reducer,initialState);
    function addCategory(){
  if(isEdit){
    setisEdit(false);
    dispatch({id:isEditId,name:name,type:"editCategory"})
  }
  else if(name){
    dispatch({id:Date.now(),name:name,type:"addCategory"})
  }
  else{
    alert("You need to enter the Name of the Category");
  }
  setisEdit("");
  setName("");
}
function addItem(){
  if(!itemName || !itemPrice || !itemQuantity){
      alert("Please fill all the details of the item");
      return
      }
  if(editItems){
    dispatch({type:"editItem",name:itemName,price:itemPrice,qty:itemQuantity,catId:editItemId.catId,id:editItemId.id})
  }else{
    dispatch({itemId:Date.now(),type:"addItem",itemName:itemName,itemPrice:itemPrice,itemQty:itemQuantity,catId:categoryId})
  }
  setItemName("");
  setItemPrice("");
  setItemQuantity("");
   setEditItems(false);
    setEditItemId({catId:"", id:""});
  setDisplay(false);
}
function editCategory(id){
  setisEdit(true);
  setisEditId(id);
  const foundCat = state.categories.find((sta)=>sta.id === id);
  setName(foundCat.name);
}
function editItem(catId,id){
  setEditItems(true);
  setDisplay(true);
  setEditItemId({...editItemId,catId:catId,id:id});
  setCategoryId(catId);
  state.categories.map((sta)=>{
    if(sta.id === catId){
      const editIemValue = sta.items.find((st)=>st.id === id);
      setItemName(editIemValue.name);
      setItemPrice(editIemValue.price);
      setItemQuantity(editIemValue.qty); 
      
    }
  })
}
function itemTotal(id){
  let returnValue = 0;
  state.categories.forEach((sta)=>{
    sta.items.forEach((item)=>{
      if(item.id === id){
        returnValue = item.price*item.qty;
      }
    })
  }) 
  return(returnValue);
}
function CategoryTotal(id){
  let returnValue = 0;
  state.categories.forEach((sta)=>{
    if(sta.id === id){
      sta.items.forEach((item)=>{
        returnValue += item.price*item.qty;
      })
    }  
  }) 
  return(returnValue);
}
function grandTotal(){
  let returnValue = 0;
  state.categories.forEach((sta)=>{
    sta.items.forEach((item)=>{
      returnValue += item.qty * item.price;
    })
  })
  return(returnValue);
}
    return(
        <>
        <label htmlFor="category">Enter the new Category: <input type="text" id="category" value={name} onChange={(e)=>setName(e.target.value)}/></label>
        <button onClick={()=>addCategory()}>Add Category</button>
        {state.categories.map((sta)=>{
            return(
            <div className="inline" key={sta.id}>
                <p>{sta.name}</p>
                <button className="mr-2.5" onClick={()=>{setDisplay(true)
                  setCategoryId(sta.id)
                }}>Add New Item</button>
                {display && (categoryId===sta.id) &&  <div className="">
                <label htmlFor="">Enter Item Name: <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)}/></label>
                <br />
                <label htmlFor="">Enter Item Price: <input type="text" value={itemPrice} onChange={(e)=>setItemPrice(Number(e.target.value))}/></label>
                <br />
                <label htmlFor="">Enter the Quantity: <input type="text" value={itemQuantity} onChange={(e)=>setItemQuantity(Number(e.target.value))}/></label>
                <br />
                <button onClick={()=>
                  {
                  setDisplay(false)
                  setCategoryId(null)
                  setItemName("");
                  setItemPrice("");
                  setItemQuantity("");
                  }} className="mr-2">Cancel</button>
                <button onClick={()=>addItem()}>Add Item</button>
                </div>}
                {(sta.items.length !== 0)?
                sta.items.map((st)=>{
                return(
            <div className="inline" key={st.id}>
                <p className="">Item: Name: {st.name} Price:{st.price} Quantity:{st.qty} Total:{itemTotal(st.id)}</p>
                <button className="mr-2" onClick={()=>editItem(sta.id,st.id)}> Edit Item</button>
                <button onClick={()=>dispatch({type:"deleteItem",id:st.id,catId:sta.id})}>Delete Item</button>
                 <br />
            </div>
            )
        }):<p>No Current Item</p>}
        <p>{sta.name} Total: {CategoryTotal(sta.id)}</p>
        <button className="mr-2" onClick={()=>editCategory(sta.id)}>Edit Category</button>
        <button onClick={()=>dispatch({type:"deleteCategory",id:sta.id,})}>Delete Category</button>
        <p>Grand Total for all Categories:{grandTotal()}</p>
                </div>
            )
        })}
        </>
    )
} 