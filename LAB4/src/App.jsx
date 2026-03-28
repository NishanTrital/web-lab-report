import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import "./App.css";

// ── Helper ──────────────────────────────────────────────
const now = () =>
  new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const seed = [
  { id: 1, text: "Read the React docs", priority: "high",   completed: true,  createdAt: "Mar 20, 2025" },
  { id: 2, text: "Build LAB4 CRUD app", priority: "high",   completed: false, createdAt: "Mar 25, 2025" },
  { id: 3, text: "Style with CSS vars",  priority: "medium", completed: false, createdAt: "Mar 27, 2025" },
];

//  PARENT COMPONENT — all state lives here, passed to children via props
function App() {
  const [todos, setTodos]   = useState(seed);        //  Main state
  const [filter, setFilter] = useState("all");        //  Filter state
  const [nextId, setNextId] = useState(seed.length + 1);

  // ── CRUD handlers ──────────────────────────────────────

  //  CREATE — Add a new todo
  const handleAdd = (text, priority) => {
    const newTodo = { id: nextId, text, priority, completed: false, createdAt: now() };
    setTodos([newTodo, ...todos]);
    setNextId(nextId + 1);
  };

  // TOGGLE — Mark complete / incomplete
  const handleToggle = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // UPDATE — Edit todo text
  const handleEdit = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  // DELETE — Remove a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // BULK DELETE — Clear all completed
  const handleClearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  // ── Derived data ────────────────────────────────────────
  const filteredTodos =
    filter === "active"    ? todos.filter((t) => !t.completed) :
    filter === "completed" ? todos.filter((t) => t.completed)  :
    todos;

  const stats = {
    total:     todos.length,
    active:    todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  const progress = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="app">
      <div className="noise" />

      <div className="container">
        {/* Header */}
        <header className="app-header">
          <div className="header-top">
            <span className="app-tag">LAB4</span>
            <h1 className="app-title">TASK<br />BOARD</h1>
          </div>

          {/* Progress bar */}
          <div className="progress-block">
            <div className="progress-labels">
              <span>{stats.completed} done</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </header>

        {/*  Child: TodoInput — passes onAdd handler via props */}
        <TodoInput onAdd={handleAdd} />

        {/* Child: FilterBar — passes state + handlers via props */}
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          stats={stats}
          onClearCompleted={handleClearCompleted}
        />

        {/* Child: TodoList — passes todos array + handlers via props */}
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

        <footer className="app-footer">
          <p> CRUD State Manipulation </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
