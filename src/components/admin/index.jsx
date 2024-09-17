import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import LoginForm from "./LoginForm";

function Admin({backend}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(
    localStorage.getItem("access") === "true"
  );
  const [error, setError] = useState(false);
  const [noDevice, setNoDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 456) {
      setNoDevice(true);
    }
  }, []);

  const handleLogin = async () => {
    const data = await axios.post(`${backend}/admins/login`, {
      email: email,
      password: password,
    });

    if (!data.data.success) {
      setError(true);
      return;
    }

    if (data.data.success) {
      setAccess(true);
      localStorage.setItem("access", "true"); // Persist login state in localStorage
      return;
    }
  };

  const handleLogout = () => {
    setAccess(false);
    localStorage.removeItem("access"); // Remove access from localStorage on logout
  };

  return (
    <>
      {noDevice ? (
        <h1 style={{ color: "black", fontSize: "1.8rem" }}>
          Not supported on mobile devices...
        </h1>
      ) : access ? (
        <Dashboard logout={handleLogout} backend={backend} /> // Pass handleLogout to the Dashboard to allow logging out
      ) : (
        <LoginForm
          email={email}
          password={password}
          error={error}
          setEmail={setEmail}
          setPassword={setPassword}
          setError={setError}
          login={handleLogin}
        />
      )}
    </>
  );
}

export default Admin;
