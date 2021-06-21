import react from 'react';
import { useState } from "react";

function App(){

  const [count, setCount] = useState(1);

  function Somar(){
    setCount(count + 1);
  }

  function Subtrair(){
    setCount(count - 1)
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={Somar}>+1</button>
    <button onClick={Subtrair}>-1</button>
  </div>;
}

export default App;