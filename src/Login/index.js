import "./index.css";
import { useState } from "react";
import { login } from "./utilis";

const Login = () => {
  const [username, setUsername] = useState(""); //hook called usestste and usesstate takes an argument atoms,hooks,custom hooks,useeffect
  const [password, setPassword] = useState("");
  const [showModal, setShowModal]=useState(false);
  const [error, setError]=useState("")

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
    const result = await login({ username, password });
    console.log({ result });
    setShowModal(false);
    }catch (error){
        setError("Invalid username or password")
    }
  };
  const toggleModal = () =>{
    setShowModal(!showModal);
  };
  return (
    <div>
      
      <button onClick={toggleModal}>Login</button>
      {showModal &&(
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={toggleModal}>
                    &times;
                </span>

      
      <form onSubmit={handleLogin}>
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
         <button type="submit">Login</button> 
      </form>
    </div>
    </div>
    )}
    </div>
  );
};
export default Login;
