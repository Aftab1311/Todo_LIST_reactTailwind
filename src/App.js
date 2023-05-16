import "./App.css";
import Input from "./Components/Input";
import TodoBox from "./Components/TodoBox";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((d, index) => { if (index !== id){
      return true;}
      else{
        return false;  
    }} );
    setTodos(newTodos);
  };

  const addTodo = (item) => {
    setTodos([...todos, { item, time: new Date().toLocaleTimeString() }]);
  };

  return (
    <>
      <div className="bg-black h-screen p-3">
        <div className=" rounded mx-auto max-w-[750px] min-h-[750px] shadow-2xl bg-white">
          <Input handler={addTodo} />
          <TodoBox data={todos} removeHandler={removeTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
