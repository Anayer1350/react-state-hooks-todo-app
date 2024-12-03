import Counter from './components/Counter';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <Counter />
      <FormInput />
      <TodoList />
    </div>
  );
}

export default App;
