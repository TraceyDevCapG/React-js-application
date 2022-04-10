import { useState } from "react";

const TodoStatus = ({ status }) => {
  const [isChecked, setIsTchecked] = useState(false);
  return (
    <div className="Todo-Status-container">
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        value="Bike"
        checked={isChecked}
        onChange={() => {
          setIsTchecked(!isChecked);
        }}
        onClick={() => {
          if (!isChecked) {
            console.log("checked")
          } else {
            console.log("not checked")
          }
        }}
        
      />
      <label htmlFor="checkbox">{status}</label>
    </div>
  );
};

export default TodoStatus;
