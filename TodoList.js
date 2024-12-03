import { useState } from 'react';

const TodoList = () => {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState('');
 const [editingId, setEditingId] = useState(null);
 const [editText, setEditText] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   if (inputValue.trim()) {
     setTodos([...todos, {
       id: Date.now(),
       text: inputValue,
       completed: false
     }]);
     setInputValue('');
   }
 };

 const removeTodo = (id) => {
   setTodos(todos.filter(todo => todo.id !== id));
 };

 const toggleComplete = (id) => {
   setTodos(todos.map(todo =>
     todo.id === id ? { ...todo, completed: !todo.completed } : todo
   ));
 };

 const startEditing = (todo) => {
   setEditingId(todo.id);
   setEditText(todo.text);
 };

 const saveEdit = () => {
   setTodos(todos.map(todo =>
     todo.id === editingId ? { ...todo, text: editText } : todo
   ));
   setEditingId(null);
 };

 return (
   <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
     <h2 className="text-xl font-bold mb-4">Enhanced Todo List</h2>
   
     <form onSubmit={handleSubmit} className="mb-4">
       <div className="flex gap-2">
         <input
           type="text"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           placeholder="Add a new todo..."
           className="flex-1 p-2 border rounded"
         />
         <button
           type="submit"
           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
         >
           Add
         </button>
       </div>
     </form>
     <ul className="space-y-2">
       {todos.map(todo => (
         <li
           key={todo.id}
           className={`flex justify-between items-center p-2 rounded ${
             todo.completed ? 'bg-green-100 line-through' : 'bg-gray-100'
           }`}
         >
           {editingId === todo.id ? (
             <div className="flex w-full">
               <input
                 type="text"
                 value={editText}
                 onChange={(e) => setEditText(e.target.value)}
                 className="flex-1 p-2 border rounded mr-2"
               />
               <button
                 onClick={saveEdit}
                 className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
               >
                 Save
               </button>
             </div>
           ) : (
             <>
               <span
                 onClick={() => toggleComplete(todo.id)}
                 className="flex-1 cursor-pointer"
               >
                 {todo.text}
               </span>
               <div className="space-x-2">
                 <button
                   onClick={() => startEditing(todo)}
                   className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                 >
                   Edit
                 </button>
                 <button
                   onClick={() => removeTodo(todo.id)}
                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                 >
                   Delete
                 </button>
               </div>
             </>
           )}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default TodoList;