import './App.css';
import LoginPage from './Components/login_page';
import { DivCard } from './Components/login_page/login_component';
import SignUpPage from "./Components/register_page"
import {useState} from "react"
function App() {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [retypedPassword, setRetypedPassword] = useState("")

const nameHandler=(e)=>{
setName(e.target.value)
console.log("done")
}
const paswordHandler=(e)=>{
setName(e.target.value)
}
const retypedPasswordHandler=(e)=>{
setName(e.target.value)
}
const cityHandler=(e)=>{
setName(e.target.value)
}
const stateHandler=(e)=>{
setName(e.target.value)
}
const userNameHandler=(e)=>{
setName(e.target.value)
}
const emailHandler=(e)=>{
setName(e.target.value)
}




  return (
    <div className="App">
      <SignUpPage handler={{nameHandler,userNameHandler,retypedPasswordHandler,paswordHandler,cityHandler,stateHandler,emailHandler}}/>
    </div>
  );
}

export default App;
