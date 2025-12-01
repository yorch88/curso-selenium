import React, { useState } from "react";

const VALID_USER = "admin@example.com";
const VALID_PASS = "123456";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === VALID_USER && password === VALID_PASS) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="card" id="login-page">
      <h2>Login simulado</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="login-email"
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            placeholder="······"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="login-password"
          />
        </label>

        <button id="login-submit" type="submit">
          Entrar
        </button>
      </form>

      {status === "success" && (
        <p id="login-success" className="alert success">
          Login correcto 🎉
        </p>
      )}

      {status === "error" && (
        <p id="login-error" className="alert error">
          Credenciales incorrectas
        </p>
      )}
    </section>
  );
}
