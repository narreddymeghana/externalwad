import { useState } from "react";

function Login({ setUser, switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("loggedIn", true);
      setUser(storedUser);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="card p-4">
      <h3>Login</h3>
      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-2" type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>

      <p className="mt-2">
        New user? <span onClick={switchToRegister}>Register</span>
      </p>
    </div>
  );
}

export default Login;