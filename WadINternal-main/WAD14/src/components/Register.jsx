import { useState } from "react";

function Register({ switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered successfully!");
    switchToLogin();
  };

  return (
    <div className="card p-4">
      <h3>Register</h3>

      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />

      <input className="form-control mb-2" type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;