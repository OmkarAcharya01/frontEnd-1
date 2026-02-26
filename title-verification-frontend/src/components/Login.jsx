import { motion } from "framer-motion";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-modern">

      <motion.div
        className="login-box-modern"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Welcome Back</h2>
        <p className="subtitle">Access your verification dashboard</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button>Login</button>

      </motion.div>

    </div>
  );
}

export default Login;