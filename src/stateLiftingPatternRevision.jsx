
// export default function Parent(){
//     const [text,setText] = useState("");
//     return(
//         <>
//         <Input value={text} onChange={setText}/>
//         <Input value={text} onChange={setText}/>
//         </>
//     )
// }
// function Input({value,onChange}){
//     return(
//         <input type="text" value={value} onChange={(e)=>onChange(e.target.value)}/>
//     )
// }
// function Calculator(first){
//     switch(first){
//         case "add":{
//             return function fistarg(a){
//                 return function add(b){
//                     console.log(a+b);
//                 }
//             }
//         }
//         case "mul":{
//             return function fistarg(a){
//                 return function mul(b){
//                     console.log(a*b);
//                 }
//             }
//         }
//     }
// }
// function Input({value,onChange}){
//         return(
//             <input type="text" value={value} onChange={onChange}/>
//         )
//     }
// function Display({value}){
//         return(
//             <>
//             <p>{value}</p>
//             <p>{value}</p>
//             </>
//         )
//     }
// export default function Render(){
//     const [value,setValue] = useState("");
//     const newCalc = Calculator("mul");
//     const newstep = newCalc(4);
//     newstep(10);
//     return(
//         <>
//         {Calculator("add")(2)(3)}
//         {}
//         Enter<Input value={value} onChange={(e)=>setValue(e.target.value)}/>
//         <Display value={value}/>
//         </>
//     )
// }

// closure example
// export default function Counter() {
//     const [count,setCount] = useState(0);
//     function handleClick(){
//         setTimeout(()=>{
//             setCount((count)=>count+1);
//             console.log("Count: ",count);
//         },2000);
//     }
//     return(
//         <div className="">
//             <p>: {count}</p>
//             <button onClick={handleClick}>Increase</button>
//         </div>
//     )
// }

// function Display({count}){
//     return(
//     <>
//     <p>Count: {count}</p>
//     </>
//     )  
// }
// function Counter({count,setCount}){
//     return(
//         <>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//         </>
//     )
// }
// export default function App(){
//     const [count,setCount] = useState(0);
//     return(
//         <>
//         <Display count={count}></Display>
//         <Counter count={count} setCount={setCount}></Counter>
//         </>
//     )
// }

// function Input({input,setInput,label}){
// return(
//     <label>{label}: <input value={input} onChange={(e)=>setInput(e.target.value)}></input></label>
// )
// }
// export default function App(){
//     const [message,setMessage] = useState("");
//     const [name,setName] = useState("");
//     const [age,setAge] = useState("");
//     function validate(event){
//     event.preventDefault();
//     if(!age || !name){
//         alert("Please Enter your name and age");
//         return 
//     }
//     if(age>100){
//         alert("Please Enter a valid age");
//         return
//     }
//     else if(age<18){
//         alert("You are too Young to enter this site");
//         return
//     }
//     setMessage("Form Submitted Successful");
// }
//     return(
//         <>
//         <form action="" onSubmit={validate}>
//         <Input input={name} setInput={setName} label="Name:"></Input>
//         <Input input={age} setInput={setAge} label="Age:"></Input>
//         <button type="submit">Submit</button>
//         {message && <p>{message}</p>}
//         </form>
//         </>
//     )

// }


// import {useState,useReducer} from "react"
// function SearchBar({searchInput,setSearchInput}){
//     return(
//         <>
//         <label htmlFor="">Enter the category <input type="text" placeholder="Category Name" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} /></label>
//         </>
//     )
// }
// const initialState = {
//   categories: [
//     {
//       id: 1,
//       name: "Electronics",
//       items: [
//         { id: 101, name: "Headphones", price: 100, qty: 1 }
//       ]
//     },
//   ]
// }
// function reducer(state,action){
//     switch(action.type){
//       case "addCategory":{
//         const newName = {id:action.id,
//             name:action.name,
//             items:[] 
//         }
//         const newArr = [...state.categories,newName];
//         return({...state,categories:newArr});
//       }
//     case "deleteCategory":{
//        const filterState = state.categories.filter((sta)=>sta.id !== action.id);
//        return({...state,categories:filterState});
//     }
//     case "editCategory":{
//       const editedArr = state.categories.map((sta)=>{
//         if(sta.id === action.id){
//           return({
//             ...sta,
//             name:action.name
//           })
//         }
//         else{
//           return sta;
//         }
//       })
//        return({...state,categories:editedArr});
//     }
//     case "addItem": {
//         const newItem = {id:action.itemId,name:action.itemName,price:action.itemPrice,qty:action.itemQty};
//         const newArr = state.categories.map((sta)=>{
//         if(action.catId === sta.id){
//             return {...sta,items:[...sta.items,newItem]};
//         }
//     else{
//         return sta;
//     }})
//     return ({...state,categories:newArr});
//     //     if(action.name == state.categories.name){
//     //     const updatedItem = [...state.categories,newItem]
//     // }
//     }
//     case "deleteItem":{
//       const updatedItem = state.categories.map((sta)=>{
//         if(sta.id === action.catId){
//         const uItem = sta.items.filter((st)=>st.id !== action.id)
//         return({...sta,items:uItem});
//         }
//         else{
//           return sta;
//         }
//       })
//      return({...state,categories:updatedItem})
//     }
//     case "editItem":{
//      const editedItem = state.categories.map((sta)=>{
//       if(sta.id === action.catId){
//      const eItem = sta.items.map((st)=>{
//         if(st.id === action.id){
//           return({...st,name:action.name,price:action.price,qty:action.qty});
//         }
//         else{
//           return st
//         }
//       })
//       return {...sta,items:eItem};
//       }
//       else{
//         return sta
//       }
//      })
//          return({...state,categories:editedItem})}
//     default:{
//       return state;
//     }
//     }
// }
// export default function Render(){
//   const [searchInput,setSearchInput] = useState("");
//   const [display,setDisplay] = useState(false); 
//   const [isEdit,setisEdit] = useState(false);
//   const [editItems,setEditItems] = useState(false);
//   const [isEditId,setisEditId] = useState(null);
//   const [editItemId,setEditItemId] = useState({catId:"",id:""})
//     const [name,setName] = useState("");
//     const [itemName,setItemName] = useState("");
//     const [itemPrice,setItemPrice] = useState("");
//     const [itemQuantity,setItemQuantity] = useState("");
//     const [categoryId,setCategoryId] = useState(null);
//     const [state,dispatch] = useReducer(reducer,initialState);
//     function addCategory(){
//   if(isEdit){
//     setisEdit(false);
//     dispatch({id:isEditId,name:name,type:"editCategory"})
//   }
//   else if(name){
//     dispatch({id:Date.now(),name:name,type:"addCategory"})
//   }
//   else{
//     alert("You need to enter the Name of the Category");
//   }
//   setisEdit("");
//   setName("");
// }
// function addItem(){
//   if(!itemName || !itemPrice || !itemQuantity){
//       alert("Please fill all the details of the item");
//       return
//       }
//   if(editItems){
//     dispatch({type:"editItem",name:itemName,price:itemPrice,qty:itemQuantity,catId:editItemId.catId,id:editItemId.id})
//   }else{
//     dispatch({itemId:Date.now(),type:"addItem",itemName:itemName,itemPrice:itemPrice,itemQty:itemQuantity,catId:categoryId})
//   }
//   setItemName("");
//   setItemPrice("");
//   setItemQuantity("");
//    setEditItems(false);
//     setEditItemId({catId:"", id:""});
//   setDisplay(false);
// }
// function editCategory(id){
//   setisEdit(true);
//   setisEditId(id);
//   const foundCat = state.categories.find((sta)=>sta.id === id);
//   setName(foundCat.name);
// }
// function editItem(catId,id){
//   setEditItems(true);
//   setDisplay(true);
//   setEditItemId({...editItemId,catId:catId,id:id});
//   setCategoryId(catId);
//   state.categories.map((sta)=>{
//     if(sta.id === catId){
//       const editIemValue = sta.items.find((st)=>st.id === id);
//       setItemName(editIemValue.name);
//       setItemPrice(editIemValue.price);
//       setItemQuantity(editIemValue.qty); 
      
//     }
//   })
// }
// function itemTotal(id){
//   let returnValue = 0;
//   state.categories.forEach((sta)=>{
//     sta.items.forEach((item)=>{
//       if(item.id === id){
//         returnValue = item.price*item.qty;
//       }
//     })
//   }) 
//   return(returnValue);
// }
// function CategoryTotal(id){
//   let returnValue = 0;
//   state.categories.forEach((sta)=>{
//     if(sta.id === id){
//       sta.items.forEach((item)=>{
//         returnValue += item.price*item.qty;
//       })
//     }  
//   }) 
//   return(returnValue);
// }
// function grandTotal(){
//   let returnValue = 0;
//   state.categories.forEach((sta)=>{
//     sta.items.forEach((item)=>{
//       returnValue += item.qty * item.price;
//     })
//   })
//   return(returnValue);
// }
// const filteredArray = searchInput?state.categories.filter((sta)=>sta.name.toLowerCase().includes(searchInput.toLowerCase())):state.categories;
//     return(
//         <>
//         <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}></SearchBar>
//         <label htmlFor="category">Enter the new Category: <input type="text" id="category" value={name} onChange={(e)=>
//             setName(e.target.value)}/></label>
//         <button onClick={()=>addCategory()}>Add Category</button>
//         {filteredArray.map((sta)=>{
//             return(
//             <div className="inline" key={sta.id}>
//                 <p>{sta.name}</p>
//                 <button className="mr-2.5" onClick={()=>{setDisplay(true)
//                   setCategoryId(sta.id)
//                 }}>Add New Item</button>
//                 {display && (categoryId===sta.id) &&  <div className="">
//                 <label htmlFor="">Enter Item Name: <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)}/></label>
//                 <br />
//                 <label htmlFor="">Enter Item Price: <input type="text" value={itemPrice} onChange={(e)=>setItemPrice(Number(e.target.value))}/></label>
//                 <br />
//                 <label htmlFor="">Enter the Quantity: <input type="text" value={itemQuantity} onChange={(e)=>setItemQuantity(Number(e.target.value))}/></label>
//                 <br />
//                 <button onClick={()=>
//                   {
//                   setDisplay(false)
//                   setCategoryId(null)
//                   setItemName("");
//                   setItemPrice("");
//                   setItemQuantity("");
//                   }} className="mr-2">Cancel</button>
//                 <button onClick={()=>addItem()}>Add Item</button>
//                 </div>}
//                 {(sta.items.length !== 0)?
//                 sta.items.map((st)=>{
//                 return(
//             <div className="inline" key={st.id}>
//                 <p className="">Item: Name: {st.name} Price:{st.price} Quantity:{st.qty} Total:{itemTotal(st.id)}</p>
//                 <button className="mr-2" onClick={()=>editItem(sta.id,st.id)}> Edit Item</button>
//                 <button onClick={()=>dispatch({type:"deleteItem",id:st.id,catId:sta.id})}>Delete Item</button>
//                  <br />
//             </div>
//             )
//         }):<p>No Current Item</p>}
//         <p>{sta.name} Total: {CategoryTotal(sta.id)}</p>
//         <button className="mr-2" onClick={()=>editCategory(sta.id)}>Edit Category</button>
//         <button onClick={()=>dispatch({type:"deleteCategory",id:sta.id,})}>Delete Category</button>
//         <p>Grand Total for all Categories:{grandTotal()}</p>
//                 </div>
//             )
//         })}
//         </>
//     )
// } 