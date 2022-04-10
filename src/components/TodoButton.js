const TodoButton = ({ action}) => {
  return (
    <div>
      <button 
        type="button" 
        onClick={
          () => action === 'update' ? 
            updateAction(action) : deleteAction(action)
        }>
        {action}
      </button>
    </div>
  );
};

const updateAction = (action) => {
  console.log(`${action} action`);
}

const deleteAction = (action) => {
  console.log(`${action} action`);
  return action;
}

export default TodoButton;
