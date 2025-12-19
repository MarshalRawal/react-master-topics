import { useEffect,useState } from "react";


// 1. Log on mount
// Print "Component mounted" once when the component mounts.
// export default function Render(){
//     useEffect(()=>{
//         console.log("Mounted");
//         return ()=>{
//             console.log("Unmounted");
//         }
//     },[]);
//     return <h1>Check the console</h1>;
// }

// 2. Log on state change
// Create a counter.
// Print "Count changed: X" every time the counter changes.
// export default function Render(){
//     const [count,setCount] = useState(0);
//     useEffect(()=>{
//         console.log(`Count changed: ${count}`);

//         return ()=>{
//             console.log(`Closing Count is ${count}`);
//         }
//     },[count])
//     return(
//         <>
//         <p>Count: {count}</p>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
//         </>
//     )
// }

// 3. Cleanup on unmount
// Create a timer using setInterval that logs "tick" every second.
// Stop timer when component unmounts using cleanup.

// export default function Render(){
//   const [time,setTime] = useState(0);
//   function setTimer(){
//     let timer = setInterval(()=>{
//     setTime((prev)=>{
//           if(prev === 5){
//         clearInterval(timer);
//     }
//      console.log(prev+1);
//         return(prev+1);
//     });
//     },1000)
//   }
//   return(
//     <>
//     <p>{time}</p>
//     <button onClick={setTimer}>Check</button>
//     </>
//   )
// }

export default function Render(){
    const [time,setTime] = useState(0);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime((prev)=>{
                console.log(`$Time: ${prev}`);
                return (prev+1);
            })
            return ()=>clearInterval(timer)
        },1000)
    })
    return(
        <>
        <p>{time}</p>
        </>
    )
}