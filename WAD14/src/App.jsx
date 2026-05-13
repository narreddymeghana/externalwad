import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedIn && storedUser) {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setUser(null);
  };

  const addTodo = (todo) => setTodos([...todos, todo]);

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const updateTodo = (id, text, date) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, text, dueDate: date } : t
    ));
  };

  // 🔐 NOT LOGGED IN
  if (!user) {
    return (
      <div className="container mt-5">
        {showRegister ? (
          <Register switchToLogin={() => setShowRegister(false)} />
        ) : (
          <Login
            setUser={setUser}
            switchToRegister={() => setShowRegister(true)}
          />
        )}
      </div>
    );
  }

  // ✅ LOGGED IN → SHOW TODO APP
  return (
    <div className="container mt-4">
      <button className="btn btn-danger mb-3" onClick={logout}>
        Logout
      </button>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;