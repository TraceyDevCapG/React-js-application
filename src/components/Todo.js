import TodoStatus from "./TodoStatus";
import TodoButton from "./TodoButton";
import TodoDetails from "./TodoDetails";

const Todo = ({ name, description, category }) => {
  return (
    <div>
      <TodoDetails
        name="choux"
        description="go to center market"
        category="shoping list"
      />
      <TodoStatus status="complete" />
      <TodoStatus status="in-progress" />
      <TodoButton action="Update" />
      <TodoButton action="Delete" />
    </div>
  );
};

export default Todo;
