import {useReducer} from "react"
const initialState = {count:0,history:[]};
function reducer(state,action){
    switch(action.type){
        case "Increment":
        return({...state,count:state.count+1,history:[...state.history,state.count+1]});
        case "Decrement":
        return({...state,count:state.count-1,history:[...state.history,state.count-1]});
        case "Reset":
        return(initialState);
        default:
        return state;
    }
}
export default function Render(){
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
        <>
        <p>Count: {state.count}</p>
        <p>History: {(state.history).join(",")}</p>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </>
    )

}