import React from "react";
import { Link } from "react-router-dom";

export function DivCard(props) {
  let stateComponent = props.states.map((state, index) => (
    <option key={index}>{state}</option>
  ));

  let cities = props.allCities.map((city,index)=>
    <option key={index}>{city}</option>
)
const loginButton= (props.data.mes=="registration succesful" )? (<Link to="/">login now</Link>):"" 
  return (
    <div className="divCard">
      <div className="formDiv">
        <h1>SignUp Page</h1>
        <p className="mes">{props.data.mes}</p>
        {loginButton}
        <div
          className="inputFields"
        >
          <input type="text" placeholder="Fullname" onChange={(e) => props.handler.nameHandler(e)}/>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => props.handler.emailHandler(e)}
            />
            <input
              type="email"
              placeholder="Username"
              onChange={(e) => props.handler.userNameHandler(e)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => props.handler.paswordHandler(e)}
            />
            <input
              type="password"
              placeholder="Type password again"
              onChange={(e) => props.handler.retypedPasswordHandler(e)}
            />
          </div>
          <div>
            <select id="State" onChange={(e) => props.handler.stateHandler(e)}>
              {stateComponent}
            </select>
            <select id="City" onChange={(e) => props.handler.cityHandler(e)}>
            {cities}
            </select>
          </div>
        </div>
        <button onClick={()=>props.handler.submitButtonHandler()}> SignUp </button>
      </div>
    </div>
  );
}
