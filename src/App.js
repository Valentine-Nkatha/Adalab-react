import Login from "./Login";
import Users from "./Users";

export const Introduction=()=>{
  return(
    <h1>We are Adalab</h1>
  )
}
function App(){
  return(
    <div>
      <Login/>
      <Users/>
    </div>
  );
}
export default App;