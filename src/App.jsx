
// Create a component that displays a list of your favorite foods as <li> elements.
// export default function FavouriteFood(){
//   const favArray = [{id:1,food:'Paneer'},
//     {id:2,food:'veg-chowmein'},
//     {id:3,food:'toast'},
//     {id:4,food:'beans'}];
//   function FavFood({favArray}){
//     return(
//       <>
//       <ul>
//       {favArray.map((fav)=>
//         <li key={fav.id}>{fav.food}</li>
//       )}
//       </ul>
//       </>
//     )
//   }
//   return (
//     <div className="">
//     <p>Favourite Foods</p>
//     <FavFood favArray={favArray}/>
//     </div>
//   )
// }


// // Create a component that shows "Welcome back!" if the user is logged in, or "Please log in" if they're not.
// export default function Welcome(){
//   let log = false;
//   return (log?<p>Welcome Back</p>:<p>Please log in</p>)
// }

//Create a user profile card that displays user information. If the user is premium, show a "Premium" badge.
// export default function UserDetail(){
//   const user = [{
//     id:1,
//     name: "Sarah Johnson",
//     email: "sarah@example.com",
//     age: 28,
//     isPremium: true
//     },
//   {
//     id:2,
//     name: "Marshal Rawal",
//     email: "marshal@example.com",
//     age: 21,
//     isPremium: false
//   }];
//   function UserData({user}){
//   return(
//     <>
//     {user.map((us)=>{
//       return(
//       <div key={us.id}>
//       <p>{us.name}</p>
//       <p>{us.email}</p>
//       <p>{us.age}</p>
//       {us.isPremium?<p>Premium</p>:<p>Not Premium</p>}
//       </div>)
//     })}
//     </>
//   )
//   }
//   return(
//     <>
//     <UserData user={user}/>
//     </>
//   )
// }

//Display a list of products. Show "Out of Stock" if stock is 0, and "Low Stock" if stock is less than 5.
// export default function ProductList(){
//   const products = [
//     { id: 1, name: 'Laptop', price: 999, stock: 3 },
//     { id: 2, name: 'Mouse', price: 25, stock: 0 },
//     { id: 3, name: 'Keyboard', price: 75, stock: 15 },
//     { id: 4, name: 'Monitor', price: 200, stock: 2 }
//   ];
//   function ShowProduct({product}){
//     return (
//       product.map((prod)=>{
//        let value;
//        if(prod.stock == 0){
//         value = 'Out of Stock';
//        }
//        else if(prod.stock < 5){
//         value = 'Low stock';
//        }
//        else{
//         value = '';
//        }
//        return(
//         <div key={prod.id}>
//         <p>{prod.name}</p>
//         <p>{prod.price}</p>
//         <p>{value}</p>
//         </div>
//        )
//       })
//     )
//   }
//   return (
//     <>
//     <ShowProduct product={products}/>
//     </>
//   )
// }





// Exercise 6: Dynamic Class Names
// Create a notification component that changes color based on type:

// 'success' → green background

// 'error' → red background

// 'warning' → yellow background

// import "./App.css"
// export default function Notification(){
//     function SelectNotification({}){
//         return(
//         <>
//         <h1 className="green">SUCCESS</h1>
//         <select id="select-notification" defaultValue="success">
//         <option value="success">success</option>
//         <option value="error">error</option>
//         <option value="warning">warning</option>
//         </select>
//         </>
//         )
//     }

//     return(
//     <>
//     <SelectNotification/>
//     </>
//     )
// }

// Exercise 7: Shopping Cart Summary
// Create a cart summary that:

// Lists all cart items

// Shows quantity for each item

// Calculates and displays subtotal

// Shows "Empty Cart" message if cart is empty

// Applies a 10% discount if total is over $100


// export default function ShowShoppingCart(){
//       const cartItems = [
//     { id: 1, name: 'Coffee Mug', price: 15, quantity: 2 },
//     { id: 2, name: 'Notebook', price: 8, quantity: 1 },
//     { id: 3, name: 'Pen', price: 2, quantity: 5 }
//   ];
//  function ShoppingCart({cart}){
//     if(cart.length != 0){
//     let total = cart.reduce((c,item)=>c+=item.price*item.quantity,0);
//     return(
//     <>
//     {cart.map((c)=>{
//         return(
//             <p key={c.id}>Name:{c.name} Quantity:{c.quantity} SubTotal:{c.quantity*c.price}</p>
//         )
//     })}
//     {total>100?<p>Total:{total-(10/100*total)}</p>:<p>Total:{total}</p>
// }
//     </>
//     )}
//     else{
//         return(
//             <p>Cart is Empty</p>
//         )
//     }
//  }
//  return(
//     <>
//     <ShoppingCart cart={cartItems}/>
//     </>
//  )
// }


// Exercise 9: Complex Conditional Dashboard
// Create a dashboard that shows different content based on user role and permissions.

// export default function Dashboard(){
//     const user = {
//     role: 'admin', // 'admin', 'user', or 'guest'
//     name: 'John Doe'
//   };
//     function Content({user}){
//     let message;
//     if(user.role ===  'admin'){
//         message = <div className="">
//         <h1>Welcome Admin {user.name}</h1>
//         <h1>this is {user.role} Content</h1>
//         </div>
//     }
//     else if(user.role === 'user'){
//         message = <div className="">
//         <h1>Welcome User {user.name}</h1>
//         <h1>this is {user.role} Content</h1>
//         </div>
//     }
//     else{
//         message = <div className="">
//         <h1>Welcome Guest {user.name}</h1>
//         <h1>this is {user.role} Content</h1>
//         </div>
//     }
//    return(
//     message
//    )
//     }
//     return(
//     <>
//     <Content user={user}/>
//     </>
//     )
// }


// Exercise 10: Complete E-commerce Product Grid
// Create a product grid with:

// Product cards with image, name, price

// "Sale" badge for products on sale

// "Out of Stock" overlay for unavailable products

// Stock status messages

// Add to cart button (disabled when out of stock)

// Category filtering
// export default function Productgrids(){
//   const products = [
//   {
//     id: 1,
//     name: 'Wireless Headphones',
//     price: 99.99,
//     salePrice: 79.99,
//     category: 'electronics',
//     image: 'https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=600',
//     onSale: true,
//     inStock: true,
//     stock: 15
//   },
//   {
//     id: 2,
//     name: 'Coffee Maker',
//     price: 49.99,
//     category: 'home',
//     image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
//     onSale: false,
//     inStock: false,
//     stock: 0
//   },
//   {
//     id: 3,
//     name: 'Running Shoes',
//     price: 120.00,
//     salePrice: 95.00,
//     category: 'fashion',
//     image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
//     onSale: true,
//     inStock: true,
//     stock: 25
//   },
//   {
//     id: 4,
//     name: 'Smartphone',
//     price: 699.99,
//     category: 'electronics',
//     image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
//     onSale: false,
//     inStock: true,
//     stock: 10
//   }
// ];

//    function DisplayProducts({products}){
//     return(
//    <div className="flex-container">
//    {products.map((product)=>{
//     return(
//    <div className="" key={product.id}>
//     <img src={product.image}
//     alt={product.name}
//     className="image"
//  />
//     <p>{product.name}</p>
//     <p>{product.price}</p>
//     <p>{product.stock}</p>
//     {product.onSale?<p>On Sale</p>:<p></p>}
//     {product.inStock?<><p></p>
//     <button>ADD TO CART</button></>:<><p>Out of Stock</p>
//     <button disabled>ADD TO CART</button></>}
//     {}
//     </div>
//     )
//    })}
//    </div>)
// }
//  return(
//     <DisplayProducts products={products}/>
//    )
// }





// Exercise 1: Basic Component with Props
// Create a UserCard component that accepts name, age, and email as props and displays them.

// export default function UserCardFunc(){
//   function UserCard(props){
//     return(
//       <>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//       <p>{props.email}</p>
//       </>
//     )
//   }
//   return(
//     <UserCard name={"Marshal"} age={19} email={"rawallmarshal@gmail.com"} />
//   )
// }

// export default function UserCardFunction(){
//   function UserCard({name,age,email}){
//     return(
//       <>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{email}</p>
//       </>
//     )
//   }
//   return(
//     <UserCard name={'shal'} age={22} email={"rawallmarshal@gmail.com"}/>
//   )
// }


// Exercise 2: Button Component
// Create a reusable Button component that accepts children, variant (primary/secondary), and onClick props.

// export default function ButtonFunction(){
//     function Button({onClick,children,variant}){

//         return(
//             <button onClick={onClick} style={{backgroundColor:variant === "primary"?"blue":"gray"}}>{children}</button>
//         )
//     }
//     return(
//         <>
//         <Button onClick={()=>{
//             return(
//                 alert('Button Clicked')
//             )
//         }} children={"Click Me"} variant={"primary"}/>
//         </>
//     )
// }


// Exercise 3: Product Display
// Create a Product component that shows product name, price, and a "Add to Cart" button. Pass the product data as props.
// export default function ProductDisplay(){
//     const products = [
//   {
//     id: 1,
//     name: 'Wireless Headphones',
//     price: 99.99,
//   },
//   {
//     id: 2,
//     name: 'Coffee Maker',
//     price: 49.99,
//   },
//   {
//     id: 3,
//     name: 'Running Shoes',
//     price: 120.00,
//   },
//   {
//     id: 4,
//     name: 'Smartphone',
//     price: 699.99,
//   }
// ];
//     function Product(props){
//         return(
//         <>{
//         props.products.map((product)=>{
//             return(
//                <div className="" key={product.id}>
//                 <p>{product.name}</p>
//                 <p>{product.price}</p>
//                 <button>ADD TO CART</button>
//                </div>
//             )
//         })}
//         </>
//         )
//     }
//     return(
//         <Product products={products}/>
//     )
// }

// Exercise 4: Component Composition
// Create a Card component that can wrap any content using the children prop. Then create a UserProfile that uses the Card.

// export default function Exercise4(){
//     function Card({children}){
//         return(
//         <>{children}</>)
//     }
//     function UserProfile(){
//         return(
//         <>
//         <h1>This is the user's profile</h1>
//         <Card>
//         <p>Name:Marshal Rawal</p>
//         <p>Age:22</p>
//         <p>Hobby:Coding</p>
//         </Card>
//         </>
//         )
//     }
//     return(
//         <UserProfile/>
//     )
// }

// Exercise 6: Destructuring Practice
// Refactor this component to use proper destructuring:

// function MessyComponent(props) {
//   return (
//     <div>
//       <h1>{props.user.profile.name}</h1>
//       <p>{props.user.profile.bio}</p>
//       <img src={props.user.avatar} />
//       <button onClick={props.actions.onEdit}>Edit</button>
//     </div>
//   );
// }

// export default function Destruct(){
//    function MessyComponent({
//     user:{profile:{name,bio},avatar}
//     ,actions:{onEdit
//     }}){
//     return(
//       <div className="">
//         <h1>{name}</h1>
//         <p>{bio}</p>
//         <img src={avatar} alt="" />
//         <button onClick={onEdit}>Edit</button>
//       </div>
//     )

//    }
//    return(
//     <MessyComponent user= {{profile: { name: "Marshal Rawal", bio: "Learning React!" },avatar: "https://via.placeholder.com/100",}} actions={{onEdit: () => alert("Edit clicked!")}}/>
//    )
// }

// Exercise 7: Advanced Composition
// Create a Layout component that accepts header, sidebar, and main as props and composes them into a proper layout.
// export default function LayoutDisplay(){
//  function Layout({header,sidebar,main}){
//   return(
//     <>
//     <>{header}</>
//     <aside>{sidebar}</aside>
//     <>{main}</>
//     </>
//   )
//  }
//  const heading = <h1>This is the heading</h1>;
//  const sideBar = <span>This is the sidebar</span>;
//  const mainText = <p>This is the main texts</p>;
//  return(
//   <Layout header={heading} sidebar={sideBar} main={mainText}/>
//  )
// }

// Exercise 9: Higher-Order Component
// Create a withAuthentication HOC that wraps a component and passes isAuthenticated and user props based on auth status.
// export default function HighOrderDisplay(){
//   const user = {
//     name:"Welcome Marshal Rawal",
//     age:22,
//     authStatus:false,
//   } 
//   function Authenthication({user,text}){
//     return(
//     <>
//     <p>{user.name}</p>
//     <p>{user.age}</p>
//     <p>{text}</p>
//     </>
//     )
//   }
//   function withAuthentication(WrappedComponent){
//      return function enhanchedFunction(props){
//         if(props.user.authStatus){
//           return <WrappedComponent {...props} text={"You are a user"}/>
//         }else{
//            return <WrappedComponent {...props}/>
//         }
//      }
//   }
//    const AuthenticatedCompoenent =  withAuthentication(Authenthication);   
//   return(<AuthenticatedCompoenent user={user}/>)
// }

// HOC Exercise: withFeatureToggle
// Scenario:
// You have a component that shows some secret content, but only if a feature flag is enabled. We want to write a HOC that:
// Wraps any component.
// Passes all the original props to the wrapped component.
// Adds a new prop isFeatureEnabled (true/false) based on some condition.
// Conditionally hides the component if isFeatureEnabled is false (optional: render a fallback message).

// export default function HocFunctionPractice(){
//   const user={
//     name:"Marshal",
//     age:22,
//     flag:false,
//   }
//   function WrappedComp({user,secret}){
//     return(
//       <>
//       <p>{user.name}</p>
//       <p>{user.age}</p>
//       <p>{secret}</p>
//       </>
//     )
//   }
//   function HighorderComponent(WrappedComp){
//     return function HighOrderc(props){
//       if(props.user.flag){
//        return <WrappedComp {...props} secret={"Secret Message"}/>
//       }
//       else{
//         return <WrappedComp {...props}/>
//       }
//     }
//   }
//   const MainFunction = HighorderComponent(WrappedComp);
//   return(<MainFunction user={user}/>)

// }

// // Exercise 10: Complex Props Destructuring
// // Create a OrderSummary component that accepts an order object with nested data (customer, items, shipping) and properly destructures it.
// export default function OrderSummaryDisplay(){
//   const order={
//     customer:"Marshal",
//     item:"Laptop",
//     shipping:"21-12-2025"
//   }
//   function OrderSummary({order:{customer,item,shipping}}){
//   return(
//     <>
//     <p>{customer}</p>
//     <p>{item}</p>
//     <p>{shipping}</p>
//     </>
//   )
//   }
//   return(<OrderSummary order={order}/>)
// }

//Counter
// import {useState} from 'react'
// export default function DisplayCounter(){
//   const [count,setCount] = useState(0); 
//   return(
//     <>
//     <h1>Counter</h1>
//     <button onClick={()=>setCount(count+1)}>Increment{count}</button>
//     <br/>
//     <button onClick={()=>setCount(count-1)}>Decrement{count}</button>
//     </>
//   )
// }

//Toggle
// import {useState} from "react"
// export default function Toggling(){
//   const [isVisible,VisibleFunc] = useState(false);
//   return(<>
//   <button onClick={()=>VisibleFunc(!isVisible)}>Toggle</button>
//   {isVisible?<p>TURN ON</p>:<p>TURN OFF</p>}
//   </>)
// }

//Array Mutable
// import {useState} from 'react'
// export default function ArryaDisplay(){
//   const [todos,setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build a project', completed: false }
//   ]);
//   function addArray(){
//     setTodos([...todos,{id:3,text:'Become a ver good Developer',completed:false}]);
//   }
//   function DisplayingComp({todos}){
//     return(
//     <>
//     <button onClick={addArray}>Add Element</button>
//       {todos.map((todo)=>{
//         return(
//           <div className="" key={todo.id}>
//             <p>{todo.text}</p>
//             <p>{todo.completed}</p>
//           </div>
//         )
//       })}
//       </>
//     )

//   }
//   return(
//     <DisplayingComp todos={todos}/>
//   )
  
// }

//Object immutable
// import {useState} from 'react'
// export default function Display(){
//   const [user,setUser] = useState({
//     name: 'Marshal',
//     email: 'mmm@jsmsj.cmom',
//     profile: {
//       age: 0,
//       location: '',
//       preferences: {
//         theme: 'light',
//         notifications: true
//       }
//     }
//   })
//   function AdObj(){
//     setUser({...user,employee:true});
//   }
//   AdObj();
//   function DisplayingObj({user}){
//     return(
//       <>
//       <p>{user.name}</p>
//       <p>{user.email}</p>
//       <p>{user.profile.preferences.theme}</p>
//       {user.employee?<p>You are a employee now</p>:<p>You are not an employee</p>}
//       <button onClick={()=>AdObj()}>Become Employee</button>
//       </>
//     )

//   }
//   return(
//     <DisplayingObj user={user}/>
//   )
// }

//useReducer
// import { useReducer } from "react";
// export default function Display(){
//   const [count,Dispatch] = useReducer(reducer,0);
//   function reducer(state,action){
//     switch(action.type){
//       case "Inc":
//         return state+1;
//       case "Dcr":
//         return state-1;
//       case "Reset":
//         return state = 0;
//       default:
//         return state;
//     }
//   }
//   function Counter(){
//     return (
//     <>
//     <h1>COUNTER:{count}</h1>
//     <button onClick={()=>Dispatch({type:"Inc"})}>INCREMENT</button>
//     <br/>
//     <button onClick={()=>Dispatch({type:"Dcr"})}>DECREMENT</button>
//     <br/>
//     <button onClick={()=>Dispatch({type:"Reset"})}>RESET</button>
//     </>
//     )
//   }
//   return(
//     <Counter />
//   )
// }
// import { useReducer } from "react"
// import { useState } from "react";
// export default function TodoDispaly(){
//    function reducer(state,action){
//     switch(action.type){
//       case "Addtask":
//       return[...state,action.value];
//       case "Deletetask":
//         return state.filter((_,idx)=>idx !== action.id);
//       case "Active":
//         return state.map((_,idx)=>{
//           if(idx === action.id){
//           return {..._,isActive:true,isCompleted:false}
//         }
//           return _;
//         });
//       case "Complete":
//         return state.map((sta,idx)=>{
//           if(idx === action.id){
//            return {...sta,isActive:false,isCompleted:true}
//           }
//           return sta;
//         })
//       default:
//         return state
//     }

//   }
//   const [todoTask,dispatch] = useReducer(reducer,[]);
//   const [task, setTask] = useState({ value: "", isActive: true, isCompleted: false });
//   const [filter,setFilter] = useState('all');
//   let filteredValue;
//  if(filter === 'active'){
//   filteredValue = todoTask.filter((todo)=>todo.isActive);
//  }
//  else if(filter === 'completed'){
//   filteredValue = todoTask.filter((todo)=>todo.isCompleted);
//  }
//  else{
//   filteredValue = todoTask
//  }
//   return(
//     <>
//     <input type="text" value={task.value} onChange={(e)=>setTask({value:e.target.value,isActive:true,isCompleted:false})}/>
//     <button  onClick={()=>{dispatch({type:'Addtask',value:task }); 
// }}>ADD TASK</button>
//  <button onClick={()=>{setFilter('all')}}>ALL</button>
//         <button onClick={()=>{setFilter('active')}}>ACTIVE</button>
//         <button onClick={()=>{setFilter('completed')}}>COMPLETED</button><br/>
//  {filteredValue.map((todo,idx)=>{
//       return(
//         <div className="" key={idx}>
//         <span>{todo.value}</span>
//         <button onClick={()=>dispatch({type:"Active",id:idx})}>ACTIVE</button>
//         <button onClick={()=>dispatch({type:"Complete",id:idx})}>COMPLETED</button>
//         <button onClick={()=>dispatch({type:'Deletetask',id:idx})}>DELETE</button>
//         </div>
//       )
//     }
//   )
// } </>
//   )
// }
// Local state - only needed in this component

// Exercise 1: Counter with Multiple Actions
// Create a counter that can increment, decrement, reset, and set to a specific value.
// import { useState } from "react"
// export default function CounterDisplay(){
//   const [count,setCount] = useState(0);
//   function increment(){
//     setCount(c=>c+1);
//   }
//   function decrement(){
//     setCount(c=>c-1);
//   }
//   function reset(){
//     setCount(0)
//   }
//   return(
//     <>
//     <p>{count}</p>
//     <button onClick={()=>increment()}>INCREMENT</button>
//     <button onClick={()=>decrement()}>DECREMENT</button>
//     <button onClick={()=>reset()}>RESET</button>
//     <input type="text" placeholder="Type what you want to set the Counter" onChange={(e)=>setCount(Number(e.target.value))} value={count}/>
//     </>
//   )

// }

// Exercise 3: User Form
// Create a form that captures user information (name, email, age) and displays it in real-time.
// import { useState } from "react"
// export default function Display(){
//   const [detail,setDetail] = useState({
//     name:'',
//     age:'',
//     email:'',
//   });
//   const [submitted,setSubmitted] = useState(false); 
//   function HandleValues(e){
//     const {name,value} = e.target;
//     setDetail({...detail,[name]:value});
//   }
//   function FormResult(){
//     prompt('Form Submition successful!');
//     setSubmitted(true);
//   }
//  return(
//   <>
//   <input type="text" name='name' onChange={(e)=>HandleValues(e)} value={detail.name}/>
//   <input type="text" name='age' onChange={(e)=>HandleValues(e)} value={detail.age}/>
//   <input type="email" name='email' onChange={(e)=>HandleValues(e)} value={detail.email}/>
//   <button onClick={()=>FormResult()}>SUBMIT</button>
//   {submitted && <>
//       <p>{detail.name}</p>
//       <p>{detail.age}</p>
//       <p>{detail.email}</p>
//       </>}
//   </>
//  )
// }

// Exercise 2: Todo List Basics
// Create a todo list where you can add and remove todos. Each todo should have text and completed status.
// import {useState} from 'react'
// export default function TodoDisplay(){
//   const [todo,setTodo] = useState([]) 
//   const [task,setTask] = useState({text:'',Completed:false})
//   const [filter,setFilter] = useState('all');
//  const isCompleted = (filter === 'all')?todo:todo.filter((to)=>to.Completed === true);
//   function completeTask(idx){
//     setTodo((previous)=>previous.map((pre)=>{
//       if(pre.id === idx){
//         return{...pre,Completed:true}
//       }
//       return pre;
//     }))
    
//   }
//   function addTask(param){
//     if(param.text.trim() === ''){
//       return
//     }
//     const newparam = {
//      ...param,id:Date.now()
//     }
//     setTodo((previous)=>[...previous,newparam])
//   }
//   function deleteTask(idx){
//     setTodo((previous)=>previous.filter((p)=>p.id != idx))
//   }
//   return(
//     <>
//     <input type="text" onChange={(e)=>setTask({text:e.target.value,Completed:false})} value={task.text}/>
//     <button onClick={()=>addTask(task)}>ADD TASK</button>
//     <button onClick={()=>{
//       setFilter('all');
//     }}>ALL</button>
//     <button onClick={()=>{
//       setFilter('completed');
//     }}>COMPLETED</button>
//     {
//       isCompleted.map((t)=>{
//         return(
//           <div className="" key={t.id}>
//           <p>{t.text}</p>
//           <button onClick={()=>deleteTask(t.id)}>DELETE</button>
//           <button onClick={()=>completeTask(t.id)}>COMPLETED</button>
//           </div>
//         )
//       })
//     }
//     </>
//   )

// }

// Exercise 4: Shopping Cart
// Build a shopping cart where you can:
// Add products with quantity
// Remove products
// Update quantities
// Calculate total price
// import {useState} from "react"
// export default function ShoppingCart(){
//   const [products,setProduct] = useState([]); 
//   const [total,setTotal] = useState(0);
//   function CalculateTotal(){ 
//   let forTotal = 0;
//   products.forEach((product)=>{
//   if(product.amount){
//    forTotal +=(product.amount)
//   }
//   })
// setTotal(forTotal)}
//   const productItems = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     price: 799,
//     category: "Electronics",
//     inStock: true,quantity:0,
//   },
//   {
//     id: 2,
//     name: "Bluetooth Headphones",
//     price: 1999,
//     category: "Electronics",
//     inStock: true,quantity:0,
//   },
//   {
//     id: 3,
//     name: "Coffee Mug",
//     price: 299,
//     category: "Home & Kitchen",
//     inStock: true,quantity:0,
//   },
//   {
//     id: 4,
//     name: "Notebook",
//     price: 149,
//     category: "Stationery",
//     inStock: true,quantity:0,
//   },
//   {
//     id: 5,
//     name: "Running Shoes",
//     price: 3499,
//     category: "Sportswear",
//     inStock: false,quantity:0,
//   },
//   {
//     id: 6,
//     name: "Water Bottle",
//     price: 499,
//     category: "Sportswear",
//     inStock: true,quantity:0,
//   },
//   {
//     id: 7,
//     name: "LED Desk Lamp",
//     price: 1299,
//     category: "Home & Kitchen",
//     inStock: true,quantity:0,
//   }
// ];
// // function CalculateTotal(){
// //   let total = 0;
// //   setProduct((prev)=>{
// //    return prev.map((p)=>{
// //       if(p.quantity){
// //         total += p.quantity*p.price;
// //       }
// //       return p.quantity?{...p,total:p.quantity*p.price}:p;
// //     })
// //   })
// //   return total;
// // }
// function AddProduct(idx){
//   // setProduct((pre)=>[...pre,productItems[idx]]);
//   setProduct((pre)=>{
//    const newProduct = pre.find((product)=>product.id === idx);
//     if(newProduct){
//       return pre.map((p)=>{
//      return p.id ===idx?{...p,quantity:p.quantity+1,amount:(p.quantity+1)*p.price}:p;
//     })}
//     else{
//       // return p.id !== idx?p:{newProduct,quantity:1};
//       const pitem = productItems.find((p)=>p.id === idx);
//       return [...pre,{...pitem,quantity:1,amount:(1)*pitem.price}];
//     }
// })
//   }
// function DeleteProduct(idx){
//    setProduct((prev)=>{
//     const exist = prev.find((p)=>p.id === idx);
//     if(!exist){
//       return prev;
//     }
//     if(exist.quantity > 1){
//      return prev.map((p)=>p.id===idx?{...p,quantity:p.quantity-1,amount:(p.quantity-1)*p.price}:p)
//     }
//     else{
//       return prev.filter((p)=>p.id !== idx);
//     }
   
//    })
// }
// return(
//   <>
//   <h1>THIS IS OUR PRODUCTS</h1>
//   {productItems.map((product,id)=>{
//     return(
//       <div className="flex gap-3" key={product.id}>
//       <p>{product.name}: {product.price}</p>
//       <p>{product.category}</p>
//       <button onClick={()=>AddProduct(product.id)}>ADD</button>
//       <button onClick={()=>DeleteProduct(product.id)}>LESS</button>
//       </div>
//     )
//   })}
//   {products.map((produ)=>{
//     return(
//       <div className="" key={produ.id}>
//     <p>{produ.name}:{produ.category} Quantity:{produ.quantity} Price:{produ.amount}</p>
//     </div>
//     )
//   })}
//   <button onClick={CalculateTotal}>CALCULATE TOTAL</button>
//   {total>0?<p>Total:{total}</p>:<p></p>}
//   </>
// )


// }


// Exercise 6: State Lifting - Temperature Converter
// Create Celsius and Fahrenheit inputs that stay in sync through lifted state.
// import { useState } from "react";
// export default function Display(){
//   const [celsi,setCelsi] = useState("");
//   const [faran,setFaran] = useState("");
//   function Celsius(param){
//     setCelsi((param-32)*5/9);
//   }
//   function Faranheit(param){
//     setFaran((param*9/5)+32);
//   }
//   return(
//     <>
//     <label htmlFor="">Enter faranheit<input placeholder="Enter the value in faranheit" type="text" name="" id="" onChange={(e)=>
//       Celsius(e.target.value)}/></label>
//   <label htmlFor="">Enter celsius<input placeholder="Enter the value in celsius" type="text" name="" id="" onChange={(e)=>
//       Faranheit(e.target.value)}/></label>
//     <p>Celsius:{celsi}</p>
//     <p>Faranheit{faran}</p>
//     </>
//   )
// }

// 🔴 Hard Exercises
// Exercise 7: Complex Form Management
// Create a multi-step form with validation, where each step has different fields and state is managed properly.
// import {useReducer} from "react";
// import { useState } from "react";
// export default function Display(){
//     function Reducer(state,action){
//         switch(action.type){
//             case 'Update-field':
//             return {...state,[action.name]:action.value};
//         default:
//             return state;
               
//         }
//     }
//     const [state,dispatch] = useReducer(Reducer,{name:'',email:'',city:'',country:'',username:'',password:''});
//     const [steps,setSteps] = useState(0);
//     function nextStep(){
//         setSteps((step)=>step+1);
//     }
//     function previousStep(){
//         setSteps((step)=>step-1);
//     }
//     return(
//     <>
//     {steps === 0 && <div>
//         <label htmlFor="">Enter your name: <input type="text" name="name" onChange={((e)=> dispatch({type:'Update-field',name:e.target.name,value:e.target.value}))} value={state.name}/></label>
//         <label htmlFor="">Enter your Email: <input type="email" name="email" onChange={(e)=>dispatch({type:'Update-field',name:e.target.name,value:e.target.value})} value={state.email}/></label>
//         <button onClick={()=>{
//             (state.name&&state.email)?nextStep():alert('Please Fill the fields before submitting');
//         }}>SUBMIT</button>
//     </div>}
//     {steps === 1 && <div>
//         <label htmlFor="">Enter your City <input type="text" name="city" id="" onChange={(e)=>dispatch({type:'Update-field',name:e.target.name,value:e.target.value})} value={state.city}/></label>
//         <label htmlFor="">Enter your Country <input type="text" name="country" onChange={(e)=>dispatch({type:'Update-field',name:e.target.name,value:e.target.value})} value={state.country}/></label>
//         <button onClick={previousStep}>GO BACK</button>
//         <button onClick={()=>{
//             (state.city&&state.country)?nextStep():alert('Please fill the field before you submit')}}>SUBMIT</button>
//     </div>}
//     {steps === 2 && <div>
//         <label htmlFor="">Enter your Username: <input type="text" name="username" id="" onChange={(e)=>dispatch({type:'Update-field',name:e.target.name,value:e.target.value})} value={state.username}/></label>
//         <label htmlFor="">Enter your Password: <input type="password" name="password" id="" onChange={(e)=>dispatch({type:'Update-field',name:e.target.name,value:e.target.value})} value={state.password}/></label>
//         <button onClick={previousStep}>GO BACK</button>
//         <button onClick={()=>{
//             (state.username&&state.password)?nextStep():alert('Please fill the field before you submit')}}>SUBMIT</button>
//         </div>}
//     {steps === 3 && <div>
//         <p>Are you sure You have given the correct Informations</p>
//         <button onClick={previousStep}>GO BACK</button>
//         <button onClick={nextStep}>SUBMIT</button>
//         </div>}
//     {(steps === 4) && <div>
//         <h1>WELCOME</h1>
//         <p>{state.name}</p>
//         <p>{state.email}</p>
//         <p>{state.city}</p>
//         <p>{state.country}</p>
//         <p>{state.username}</p>
//         <p>{state.password}</p>
//         <button onClick={previousStep}>GO BACK</button>
//         </div>} 
//     </>
// )
// }

// Exercise 8: useReducer with Async Actions
// Extend useReducer to handle async operations like API calls for authentication
// import { useState } from "react";
// import { useReducer } from "react";
// export default function Display(){
//   function reducer(state,action){
//     switch(action.type){
//         case 'start':
//             return {...state,loading:true,error:null};
//         case 'success':
//           return {...state,loading:false,token:action.payload,error:null};
//         case 'error':
//           return {...state,loading:false,error:action.payload}
//         default:
//         return state
//     }
//   }
//   const [state,dispatch] = useReducer(reducer,({
//     loading:false,
//     token:null,
//     error:null,
//   }));
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState(''); 
//   async function Login(e){
//     e.preventDefault();
//     if(!(email)||!(password)){
//         alert('Please fill the form');
//         return;
//     }
//     dispatch({type:'start'});
//     try{
//     const res = await fetch("https://reqres.in/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//     console.log(res);
//     if(!res.ok){
//       throw new Error('Invalid Credintels');
//     }
//     const data = await res.json();
//     console.log(data);
//     dispatch({type:'success',payload:data.token})
//     }
//     catch(error){
//     dispatch({type:'error',payload:error.message});
//     }
//   }
// return(
//   <>
//   <form onSubmit={Login}>
//     <label htmlFor="">Email: </label><input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
//     <label htmlFor="">Password: </label><input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} value={password}/>
//     <button type="submit" disabled={state.loading}>{state.loading?"LOGING IN":"LOG IN"}</button>
//   </form>
//   {state.token?<p>Welcome {email}</p>:<p>{state.error}</p>}
//   </>
// )
// }

// Exercise 9: Optimized Product Filtering
// Create a product catalog with multiple filters (category, price range, rating) that update efficiently.
// import { useState } from "react";
// import { useReducer } from "react";
// export default function Display(){
//   function reducer(state,action){
//     switch(action.type){
//       case "set-product":
//         return {...state,products:action.payload}
//        default:
//       return state; // ✅ important
//     }
//   }
//   const [state,dispatch] = useReducer(reducer,{products:[]});
//   const [productData,setProductData] = useState([]);
//   const [priceData,setPriceData] = useState(null);
//   const [categoryData,setCategoryData] = useState('all');
//   function Filteringcategory(categoryFi,param) {
//     let filterData = [...productData];
//     if(categoryFi === 'all'){
//       // return filterData;
//     }
//     else if(categoryFi === 'Clothes'){
//       filterData = filterData.filter((news) => news.category.name === 'Clothes');
//     }
//     else if(categoryFi === 'Furniture'){
//       filterData = filterData.filter((news)=>news.category.name === 'Furniture');
//     }
//     else if(categoryFi === 'Electronics'){
//       filterData = filterData.filter((news)=>news.category.name === 'Electronics');
//     }
//      else if(categoryFi === 'Shoes'){
//       filterData = filterData.filter((news)=>news.category.name === 'Shoes');
//     }
//      else if(categoryFi === 'Miscellaneou'){
//       filterData = filterData.filter((news)=>news.category.name === 'Miscellaneou');
//     }
//     if(param){
//       if(param === 'cancel'){
//       filterData = [...productData];
//     }
//       else if(param>=0 && param <= 30){
//        filterData = filterData.filter((product)=>(product.price>=0 && product.price <= 30))
//     }
//     else if(param>30 && param <= 60){
//      filterData = filterData.filter((product)=>(product.price>30 && product.price <= 60))
//     }
//     else if(param>60 && param <= 100){
//       filterData = filterData.filter((product)=>(product.price>60 && product.price <= 100))
//     }
//     else if(param>100){
//       filterData = filterData.filter((product)=>(product.price>100))
//     }
//     }
//     setCategoryData(categoryFi);
//     setPriceData(param === 'cancel' ? null : param);
//     return filterData;
//   }
// //Furniture
// //Electronics Miscellaneou
// // Clothes
//   async function Render(){
//     const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30');
//     const data = await res.json();
//     dispatch({type:'set-product',payload:data})
//     setProductData(data);
//     console.log(data);
//     // console.log(data.products);
//   }
//   return(
//     <div className="">
//       <button onClick={Render}>Click</button>
//        <h1>Price Range</h1>
//        <button onClick={()=>{
//         const resu = 15
//         const result = Filteringcategory(categoryData,resu)
//         dispatch({type:'set-product',payload:result})
//       }}>0-30</button>
//       <button onClick={()=>{
//         const resu = 45
//         const result = Filteringcategory(categoryData,resu)
//         dispatch({type:'set-product',payload:result})
//       }}>30-60</button>
//       <button onClick={()=>{
//         const resu = 75
//         const result = Filteringcategory(categoryData,resu)
//         dispatch({type:'set-product',payload:result})
//       }}>60-100</button>
//       <button onClick={()=>{
//         const resu = 110
//         const result = Filteringcategory(categoryData,resu)
//         dispatch({type:'set-product',payload:result})
//       }}>100-above</button>
//       <button onClick={()=>{
//         const resu = 'cancel'
//         const result = Filteringcategory(categoryData,resu)
//         dispatch({type:'set-product',payload:result})
//       }}>Cancel</button>
//       <h1>Categories</h1>
//       <button onClick={()=>{
//         const resu = 'all'
//         const result = Filteringcategory(resu,priceData)
//         dispatch({type:'set-product',payload:result})
//       }}>ALL</button>
//       <button onClick={()=>{
//         const resu = 'Clothes';
//         const result = Filteringcategory(resu,priceData)
//         dispatch({type:'set-product',payload:result})
//       }}>Clothes</button>
//        <button onClick={()=>{
//         const resu = 'Furniture';
//         const result = Filteringcategory(resu,priceData)
//         dispatch({type:'set-product',payload:result})
//       }}>Furniture</button>
//       <button onClick={()=>{
//         const resu = 'Electronics';
//         const result = Filteringcategory(resu,priceData)
//         dispatch({type:'set-product',payload:result})
//       }}>Electronics</button>
//       <button onClick={()=>{
//         const resu = 'Miscellaneou';
//         const result = Filteringcategory(resu,priceData)
//         dispatch({type:'set-product',payload:result})
//       }}>Miscellaneou</button>
//       <button onClick={()=>{
//         const resu = 'Shoes';
//         const result = Filteringcategory(resu,priceData)
//         dispatch({type:'set-product',payload:result})
//       }}>Shoes</button>
//       {state.products.map((product)=>{
//         return(
//           <div className="" key={product.id}>
//           <p>{product.title}</p>
//           <img src={product.images[1]} alt="this is an image" />
//           <p>{product.category.name}</p>
//           </div>
//         )
//       })}
//       {state.products.map((product)=>{
//         return(
//           <div className="" key={product.id}>
//           <p>{product.price}</p>
//           <p>{product.category.name}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default function AndCondition(){
// const isLoggedIn = true;
// const itemsInCart = 3;
// const isAdmin = false;
// const products = [
//   { id: 101, name: "Laptop", price: 1200 },
//   { id: 102, name: "Phone", price: 600 },
//   { id: 103, name: "Headphones", price: 150 }
// ];
// const students = [
//   { id: 1, name: "Aashish" },
//   { id: 2, name: "Bikram" },
//   { id: 3, name: "Chirag" }
// ];
// const messages = [
//   { id: 1, text: "Hello!", unread: true },
//   { id: 2, text: "You have a package.", unread: false },
//   { id: 3, text: "Meeting at 4 PM!", unread: true }
// ];
// const tasks = ["Learn JS", "Practice React", "Go for a run"];
// return(
// <>
// {(itemsInCart > 0) && <p>Cart({itemsInCart})</p>}
// {isLoggedIn}
// {isAdmin?<p>IsAdmin Panel</p>:<p>IsUser Panel</p>}
// {isLoggedIn?<p>Logged In</p>:<p>Not Logged in</p>}
// <ul>
//    {tasks.map((task,index)=>{
//     return(<li key={index}>{task}</li>)
//    })}
// </ul>
// <div className="">
// {products.map((product)=>{
//     return(
//         <p key={product.id}>{product.name} - {product.price}</p>
//     )
// })}
// </div>
// <div className="">
//     {students.map((student)=>{
//         return(<p key={student.id}>{student.name}</p>)
//     })}
// </div>
// <div className="">
//     {students.map((student,index)=>{
//         return(<p key={index}>{student.name}</p>)
//     })}
// </div>
// <div className="">
//     {messages.map((message)=>{
//         return(
//             message.unread?<p>🟢 {message.text}</p>:<p>⚪ {message.text}</p>
//         )
//     })}
// </div>
// </>)
// }



// import Card from "./componentcompositionrevision";
// export default function App(){
//     return(
//         <Card title='HEllo' detail='This is hello Card'></Card>
//     )
// }

// import Profile from "./propsrevision";
// import PropTypes from "prop-types";

// export default function App() {
//   return (
//     <Profile name={22} age="hello" />   // wrong types on purpose
//   );
// }

// import Box from './childrenproprevision'
// export default function App(){
//   return(
//   <Box children={"<h1>This is h1</h1>"}>
//   </Box>)
// }

// import Button from './destructuringRevision'
// import {Display} from './destructuringRevision'
// import {Display2,Display3,Display4} from './destructuringRevision'
// import Counter from './useStateRevise'
// import { multiplyAll,add } from './useStateRevise'
// export default function App(){
//   const nums = [10, 20, 30];
//   const a = [1, 2];
//   const b = [3, 4];
//   const c = [5, 6];
//   const newArr = [...a,...b,...c];
//   const person = {
//   name: "Sarah",
//   details: {
//     age: 25,
//     city: "Pokhara"
//   }
// };
// combine([1, 2], [3], [4, 5])
// // output → [1,2,3,4,5]
// function combine(a,b,c){
//   console.log([...a,...b,...c]);
// }

// const details = {age:30,city:"kathmandu"};
// const newPerson = {...person,details};

// console.log(newPerson);
//   console.log(add(...nums),newArr);
//   multiplyAll(2,3,4);
//   return(
//     <>
//     <Button label='Click Me' funct={()=>alert('You clicked')}></Button>
//     <Display></Display>
//     <Display2></Display2>
//     <Display3></Display3>
//     <Display4></Display4>
//     <Counter></Counter>
//     </>
//   )
// }
// import { Counter } from "./useStateRevise";
// import { sumAll,countArgs,combine,removeFirst,safeUser,analyze,deepMerge} from "./restSpread";
// export default function App(){
//  sumAll(1, 2, 3, 4);  
//  sumAll(10, 5);    
//  countArgs("a", true, 5, {}, []);   
//  combine([1,2], [3], [4,5]);  
//  removeFirst([10, 20, 30]); 
//  const user = {
//   username: "john",
//   age: 20,
//   password: "secret"
// };
// safeUser(user); 
// const obj1 = { a: 1, b: { x: 10 } };
// const obj2 = { b: { y: 20 }, c: 3 };
// const obj3 = { d: 4 };
// deepMerge(obj1,obj2,obj3);
// return(
// <>
// <Counter></Counter>
// </>)
// console.log(analyze(1, "a", [1], {x:1}, [2]))

// }
// import TodoList from "./useStateRevise";
// import { UserProfileForm } from "./useStateRevise";
// export default function App(){
//   return(
//   <>
//   <TodoList>
//   </TodoList>
//   <UserProfileForm>
//   </UserProfileForm>
//   </>)
// }
// import Question from "./useStateRevise";
// export default function Render(){
//   return(
//     <>
//   <Question>
//   </Question>
//   </>)
// }
// import Render from "./useReducerRevision";
// export default function App(){
//   return(
//     <>
//     <Render>
//     </Render>
//     </>
//   )
// }
// import Render from "./stateLiftingPatternRevision";
// export default function App(){
//     return(
//         <>
//         <Render></Render>
//         </>
//     )
// } 
// import Render from "./Immutableupdates"
// export default function App(){
// return(
//     <Render>
//     </Render>
// )
// }
import Render from "./useEffectHook"
import { useState } from "react"
export default function App(){
    return(
        <>
        <Render></Render>
        </>
    )
}