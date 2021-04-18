import "./App.css";
import LoginPage from "./Components/login_page";
import { DivCard } from "./Components/login_page/login_component";
import SignUpPage from "./Components/register_page";
import { useState } from "react";
import axios from "axios";

import {
	BrowserRouter,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("Port Blair");
  const [state, setState] = useState("Andaman and Nicobar Islands");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [allCities, setAllCities] = useState(["Port Blair"]);
  const [mes, setMes] = useState("");
  const [email, setEmail] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const paswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const retypedPasswordHandler = (e) => {
    setRetypedPassword(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const stateHandler = (e) => {
    setState(e.target.value);
    let url = `http://localhost:8000/cityAPI?stateName=${e.target.value}`;
    axios.get(url).then((data) => {
      let temp = [];
      for (let index in data.data) {
        temp.push(data.data[index]);
      }
      setAllCities(temp);
      setCity(temp[0]);
    });
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitButtonHandler = () => {
    if (
      userName == "" ||
      email == "" ||
      retypedPassword == "" ||
      password == "" ||
      retypedPassword == "" ||
      city == "" ||
      state == ""
    ) {
      setMes("All fields must be filled");
    } else if (password !== retypedPassword) {
      setMes("password must be same in both field");
    } else {
      const url = `http://localhost:8000/reg?uname=${userName}&pword=${password}&fullName=${name}&email=${email}&state=${state}&city=${city}`;
      axios.post(url).then((data) => {
        if (data.data.msg == false) {
          setMes(
            "Something went wrong, Try again with some other username or Id"
          );
        } else {
          setMes("  ");
        }
      });
    }
  };

  return (
    <div className="App">

<BrowserRouter>
			<Switch>
      <Route exact path="/register">
        <SignUpPage
          handler={{
            nameHandler,
            userNameHandler,
            retypedPasswordHandler,
            paswordHandler,
            cityHandler,
            stateHandler,
            emailHandler,
            submitButtonHandler,
          }}
          allCities={allCities}
          data={{ mes }}
        />
      </Route>
      <Route path="/">
        <LoginPage/>
      </Route>
				
			</Switch>
		</BrowserRouter>


    </div>
  );
}

export default App;
