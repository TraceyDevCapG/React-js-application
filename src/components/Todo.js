import TodoStatus from "./TodoStatus";
import TodoButton from "./TodoButton";
import TodoDetails from "./TodoDetails";
import { useState } from "react";

const Todo = ({ name, description, category }) => {
  const [actionTrigger, setActionTrigger] = useState(true);
  const [action,setAction] = useState(actionTrigger === true ? 'update':'delete')
  const [todo, setTodo] = useState({
    name:"choux",
    description:"go to center market",
    category:"shoping list"
  });
  const [status,setStatus] = useState('in-progress')
  return (
    <div>
      <TodoDetails todoData={todo}/>
      <TodoStatus status={status} />
      <TodoButton action={action} onclick={() => setTodo}/>
    </div>
  );
};

export default Todo;