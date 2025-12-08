// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1,...arr2];
// // multiplyAll(2, 3, 4); // 24
// const data = ["apple", "banana", "mango", "orange"];
// const [first,...remaining] = data
// export function multiplyAll(...arr){
//     console.log(arr.reduce((a,b)=>a*b));
// }
// const user = { name: "Ram", age: 20 };
// const updatedUser = {...user,age:21,country:"Nepal"};
// const book = {
//   title: "JavaScript Basics",
//   price: 300,
//   author: "John Doe"
// };
// const {title,...info} = book; 

// import { useState } from "react";
// export default function Counter(){
//     {console.log(arr3)}
//     {console.log(first,remaining)}
//     {console.log(updatedUser)}
//     {console.log(title,info)}
//     const [count,setCount] = useState(0);
//     return(
//         <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
//     )
// }
// export function add(a,b,c){
//     return (a+b+c);
// }
// import React, { useState } from "react";

// export function Counter() {
//   const [count, setCount] = useState(0); // primitive
//   const [todos, setTodos] = useState([]); // array
//   const [user, setUser] = useState({ name: "Alice", age: 25 }); // object

//   // Array update
//   const addTodo = () => setTodos([...todos, "New Todo"]);

//   // Object update
//   const incrementAge = () =>
//     setUser({ ...user, age: user.age + 1 });

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>

//       <h3>Todos: {todos.join(", ")}</h3>
//       <button onClick={addTodo}>Add Todo</button>

//       <h3>User: {user.name}, Age: {user.age}</h3>
//       <button onClick={incrementAge}>Increase Age</button>
//     </div>
//   );
// }

import { useState } from "react";
// export default function Question1(){
//   const [numbers,setNumbers] = useState([1,2,3]);
//   function addNumber(){
//    setNumbers([4,...numbers]);
//   }
//   function removeNumber(){
//     setNumbers(numbers.filter((num)=>num!=2));
//   }
//   function changeNumber(){
//     setNumbers(numbers.map((num)=>{
//       if(num == 3){
//         return 30;
//       }
//       return num;
//     }))
//   }
//   return(
//     <>
//     {numbers.map((num)=>
//     <p>{num}</p>)}
//     <button onClick={addNumber}>Add</button>
//     <button onClick={changeNumber}>Change</button>
//     <button onClick={removeNumber}>Remove</button>
//     </>
//   )
// }

// export default function Question(){
//   const [user, setUser] = useState({ name: "Ram", age: 20, job: "Student" });
//   function change(){
//   setUser({...user,age:21,job:"Developer",country:"Nepal"});
//   }
//   console.log(user);
//  return(
//   <>
//   <p>{JSON.stringify(user)}</p>
//   <button onClick={change}>Change</button>
//   </>
//  )
// }

export default function Question(){
  const [todos, setTodos] = useState([
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Learn React", done: false }
]);
 const [input,setInputs] = useState("");
function addProject(){
  setTodos([...todos,{id:Date.now(),text:input,done:false}]);
  setInputs("");
}
function addDelete(id){
  setTodos(todos.filter((to)=>to.id != id));
}
function addDone(id){
  setTodos(todos.map((to)=>{
  if(to.id == id){ 
  return({...to,done:true});
  }
 return to
}
   ))
}
return(
  <>
  Task input: <input type="text" value={input} id='input-val' onChange={(e)=>setInputs(e.target.value)}/>
  <button onClick={()=>addProject()}>ADD TASK</button>
  <br />
  {todos.map((to)=>{
    return(
      <div className="" key={to.id}>
      <p>{to.text}</p>
      <button onClick={()=>addDelete(to.id)}>Delete</button>
      <br />
      <button onClick={()=>addDone(to.id)}>Done</button>
      </div>
    )
  })}
  </>
)

}