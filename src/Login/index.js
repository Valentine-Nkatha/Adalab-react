import "./index.css";
import { useState } from "react";
import { login } from "./utilis";
const Login = () => {
  const [username, setUsername] = useState(""); //hook called usestste and usesstate takes an argument atoms,hooks,custom hooks,useeffect
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login({ username, password });
    console.log({ result });
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
      <button type="submit">Login</button>
        <h2>Login</h2>
        {/* <button type="submit">Login</button> */}
        <input
          placeholder="Enter Username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        {/* <button type="submit">Login</button> */}
      </form>
    </div>
  );
};
export default Login;
