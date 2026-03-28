import { useState } from "react";

// Child Component — receives onAdd callback from Parent via props
const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, priority); // Call parent's handler via props
    setText("");
    setPriority("medium");
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          maxLength={120}
        />
        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit" className="btn-add">Add Task</button>
      </div>
    </form>
  );
};

export default TodoInput;
