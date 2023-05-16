
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
      <div className="bg-green-200 h-screen p-5">
        <div className=" rounded-[2%] mx-auto max-w-[700px] min-h-[700px] shadow-xl bg-white p-2">
          <span className="p-4 flex justify-center text-blue-800 text-bold text-2xl underline "> Todo List</span>
          <Input handler={addTodo} />
          <TodoBox data={todos} removeHandler={removeTodo} />
        </div>
      </div>
    </>
  );
}
export default App;