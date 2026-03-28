import TodoItem from "./TodoItem";

// Child Component — receives todos array + handlers from Parent via props
const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📋</span>
        <p>No tasks here. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        // Passing props down to TodoItem (grandchild)
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
