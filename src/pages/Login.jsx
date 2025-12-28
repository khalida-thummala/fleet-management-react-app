import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("Login success");
      localStorage.setItem("isAuth", "true");
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input ref={emailRef} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
