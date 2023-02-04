import React,{useState, useEffect} from 'react';
const UseEffectOne = () =>{
 const [count, setCount] = useState(0)
 useEffect(()=>{
   document.title=`Your count is ${count}`
 })
  return(<><h2>Use Effect One</h2>
    <button onClick={()=>setCount(count+1)}>click {count} times</button>
  </>);
}
export default UseEffectOne