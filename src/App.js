import "./App.css"; 
import { useState } from "react";

function App() {

  // let count = 0;

  const[count, setCount] = useState(0);

  function decreasHandaler(){
    setCount(count-1);
    console.log("Decreas Button Clicked");
  }

  function increasHandaler(){
    setCount(count+1);
    console.log("Increas Button Clicked");
  }

  function resetHandaler(){
    setCount(0);
    console.log("Reset Button Clicked")
  }

  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151] ">

   <div className="text-[#0398d4] font-medium">Increment & Decrement</div>

   <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
    <button onClick={decreasHandaler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
      -
    </button>

    <div className="font-bold gap-12 text-5xl">
      {count}
    </div>
    
    <button onClick={increasHandaler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
      +
    </button>
   </div>

   <button onClick={resetHandaler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
    Reset
   </button>
        
   </div>
  );
}

export default App;
