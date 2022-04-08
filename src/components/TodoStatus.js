const TodoStatus = ({ status }) => {
  return (
    <div className="Todo-Status-container">
      <input
        type="checkbox"
        id="Todo-status-{status}"
        name="Todo-status-complete"
        value="Bike"
      />
      <label for="Todo-status-complete">{status}</label>
    </div>
  );
};

export default TodoStatus;
