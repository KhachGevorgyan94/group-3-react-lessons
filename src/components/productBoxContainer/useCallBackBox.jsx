import {useCallback, useState} from "react";
import Todos from "./Todos";

const UseCallBackBox = ()=>{
  const [todos, setTodos] = useState([]);

  // const addTodo = () => {
  //   setTodos([...todos, "New Todo"] );
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  console.log('aaaaaaaa')

  return <div>
    <Todos todos={todos} addTodo={addTodo} />
  </div>
}
export default UseCallBackBox