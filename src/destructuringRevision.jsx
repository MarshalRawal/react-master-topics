export default function Button({label,funct}){
    return(
        <button onClick={funct}>{label}</button>
    )
}
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
const {brand,year} =  car;
export function Display(){
    return(<p>{brand} and {year}</p>)
}
const scores = [89, 76, 95];
const [first,second,third] = scores
export function Display2(){
    return(
        <p>{first} {second} {third}</p>
    )
}
const user = {
  id: 101,
  username: "marshal",
  isAdmin: true
};
const {username:name} = user;
export function Display3(){
  return(<p>{name}</p>)
}
const person = {
  name: "John",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};
const {address} = person;
const {city,country} = address;
export function Display4(){
    return(
        <p>{city} {country}</p>
    )
}