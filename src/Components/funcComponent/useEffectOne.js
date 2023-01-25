import React,{useState} from 'react';
const UseEffectOne = () =>{
 const [count, setCount] = useState(0)
 
  return(<><h2>Use Effect One</h2>
    <button>click {count} times</button>
  </>);
}
export default UseEffectOne