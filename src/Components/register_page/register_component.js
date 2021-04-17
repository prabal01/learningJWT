import React from 'react'

export function DivCard(props) {
    return (
        <div className="divCard">
            <div className="formDiv">
                <h1>SignUp Page</h1>
                <div className="inputFields" onChange={(e)=>props.handler.nameHandler(e)}>
                    <input type="text" placeholder="Fullname" />
                    <div>
                        <input type="email" placeholder="Email" onChange={(e)=>props.handler.emailHandler(e)}/>
                        <input type="email" placeholder="Username" onChange={(e)=>props.handler.userNameHandler(e)} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" onChange={(e)=>props.handler.paswordHandler(e)}/>
                        <input type="password" placeholder="Type password again" onChange={(e)=>props.handler.retypedPasswordHandler(e)}/>
                    </div>
                    <div>
                        <select id="State" onSelect={(e)=>props.handler.stateHandler(e)}>
                            <option value="volvo">Aasam</option>
                            <option value="saab">Karnataka</option>
                            <option value="mercedes">Uttar Pradesh</option>
                            <option value="audi">Gujrat</option>
                            </select>
                        <select id="City" onSelect={(e)=>props.handler.cityHandler(e)}>
                            <option value="volvo">Bateilly</option>
                            <option value="saab">Karnataka</option>
                            <option value="mercedes">Uttar Pradesh</option>
                            <option value="audi">Gujrat</option>
                            </select>
                    </div>
                </div>
                <button> SignUp </button>
            </div>
        </div>
    )
}


