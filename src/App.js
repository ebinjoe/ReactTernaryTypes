import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [staate , SetState] = useState(true)     // Advaanced Ternary
  const [staate1 , SetState1] = useState(true)   // Normal Ternary
  const [staate2 , SetState2] = useState()       // I added a value      // This wworks Similer as || or operator
  return (
   <div>

Advaned ternary

    {
      staate && <div>Advanced Trenaary will excute if it is ture , no need this extra Junk of code for null value for false - : null - </div>
    }

Normal Ternary

{
  staate1 ? <div>This will be displayed boz state is true </div> : <div>I changed the state to false so it is showing</div>
}

Null collution Ternary

{
  staate2 ?? <div> If state value is null it will diplay this</div>
}


   </div>
  );
}

export default App;
