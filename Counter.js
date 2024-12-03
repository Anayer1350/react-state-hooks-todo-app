import { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(0);
 const [maxCount, setMaxCount] = useState(10); // New state for max count

 const increment = () => {
   setCount(prevCount =>
     prevCount < maxCount ? prevCount + 1 : prevCount
   );
 };

 const decrement = () => {
   setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
 };

 const reset = () => {
   setCount(0);
 };

 const updateMaxCount = (newMax) => {
   setMaxCount(Number(newMax));
 };

 return (
   <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
     <h2 className="text-xl font-bold mb-4">Enhanced Counter</h2>
     <div className="text-center">
       <p className="text-2xl font-bold mb-4">{count}</p>
       <div className="space-x-4 mb-4">
         <button
           onClick={decrement}
           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
         >
           Decrease
         </button>
         <button
           onClick={increment}
           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
           disabled={count >= maxCount}
         >
           Increase
         </button>
         <button
           onClick={reset}
           className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
         >
           Reset
         </button>
       </div>
       <div className="flex items-center justify-center space-x-2">
         <label>Max Count:</label>
         <input
           type="number"
           value={maxCount}
           onChange={(e) => updateMaxCount(e.target.value)}
           className="p-2 border rounded w-20"
           min="1"
         />
       </div>
     </div>
   </div>
 );
};

export default Counter;
