const TodoDetails = ({ name, description, category }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default TodoDetails;
