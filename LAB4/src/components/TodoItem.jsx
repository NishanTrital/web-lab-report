import { useState } from "react";

// Child Component — receives todo data + action handlers from Parent via props
const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const priorityConfig = {
    high:   { label: "High",   dot: "" },
    medium: { label: "Medium", dot: "" },
    low:    { label: "Low",    dot: "" },
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmed = editText.trim();
    if (!trimmed) return;
    onEdit(todo.id, trimmed); // Call parent's edit handler via props
    setIsEditing(false);
  };

  const handleEditKeyDown = (e) => {
    if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""} priority-${todo.priority}`}>
      <div className="todo-left">
        {/* Toggle complete */}
        <button
          className={`checkbox ${todo.completed ? "checked" : ""}`}
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
        >
          {todo.completed ? "✓" : ""}
        </button>

        <div className="todo-body">
          {isEditing ? (
            <form onSubmit={handleEditSubmit} className="edit-form">
              <input
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handleEditKeyDown}
                autoFocus
                maxLength={120}
              />
              <button type="submit" className="btn-save">Save</button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => { setEditText(todo.text); setIsEditing(false); }}
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <span className="todo-text">{todo.text}</span>
              <span className="priority-badge">
                {priorityConfig[todo.priority].dot} {priorityConfig[todo.priority].label}
              </span>
            </>
          )}
          <span className="todo-date">Added {todo.createdAt}</span>
        </div>
      </div>

      {!isEditing && (
        <div className="todo-actions">
          {/* Edit */}
          <button
            className="btn-icon btn-edit"
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
            disabled={todo.completed}
          >
            ✏️
          </button>
          {/*Delete */}
          <button
            className="btn-icon btn-delete"
            onClick={() => onDelete(todo.id)}
            aria-label="Delete task"
          >
            🗑️
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
