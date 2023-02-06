import React, { useState, useEffect } from 'react';
const MouseHooks = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMouseEvent = (e) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  };
  useEffect(() => {
    console.log('use effect');
    window.addEventListener('mouseover', logMouseEvent);
  },[])
  return (
    <>
      <h2>Mouse Hooks</h2>
      {x} and {y}
    </>
  );
};
export default MouseHooks;
