import "./App.css";
import Input from "./Components/Input";
import TodoBox from "./Components/TodoBox";

function App() {
  return (
    <>
      <div className="bg-black h-screen p-3">
         <div className=" rounded mx-auto max-w-[750px] min-h-[750px] shadow-2xl bg-white">
         <Input/>
        <TodoBox/>
         </div>
        
      </div>
    </>
  );
}

export default App;
