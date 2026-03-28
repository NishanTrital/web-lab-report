# LAB4 — CRUD Todo App in React

## Project Structure

```
LAB4/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  ← Entry point
    ├── App.jsx                   ← PARENT — all state lives here
    ├── App.css                   ← Global styles
    └── components/
        ├── TodoInput.jsx         ← CHILD — add new task
        ├── FilterBar.jsx         ← CHILD — filter tabs + clear
        ├── TodoList.jsx          ← CHILD — renders list
        └── TodoItem.jsx          ← CHILD (grandchild) — single task row
```
