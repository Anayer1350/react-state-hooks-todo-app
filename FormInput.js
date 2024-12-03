import { useState } from 'react';

const FormInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Form Input</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter some text..."
        className="w-full p-2 border rounded mb-4"
      />
      <div className="mt-4">
        <p className="font-bold">Entered Text:</p>
        <p className="mt-2 p-2 bg-gray-100 rounded">{text}</p>
      </div>
    </div>
  );
};

export default FormInput;