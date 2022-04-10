const TodoDetails = ({ todoData }) => {
  const {name, description, category} = todoData;
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default TodoDetails;
