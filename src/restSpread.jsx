export function sumAll(...arra){
  console.log(arra.reduce((acc,cur)=>acc+cur,0));
}
export function countArgs(...args){
    console.log(args.length);
}
export function combine(...args){
    console.log(args.flat());
}
export function removeFirst(args){
    const [first,...value] = args;
    console.log(value);
}
export function safeUser(args){
    const {password,...value} = args;
    console.log(value);
}
export function analyze(...args){
    let array = 0,stri = 0,obj = 0,num = 0;
        args.forEach((arg)=>{
            if(Array.isArray(arg)){
                array++
            }
            else if (typeof arg == 'object' && arg != null){
                obj++;
            }
            else if(typeof arg == 'string'){
                stri++;
            }
            else if(typeof arg === 'number'){
              num++;
            }
        })
    return ({
        'Numbers':num,
        'Array':array,
        'String':stri,
        'Object':obj,
    })
}
export function deepMerge(...arra){
  console.log(arra.flat());
} 