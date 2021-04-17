import React from 'react'

export function DivCard() {
    return (
        <div className="divCard">
            <div className="formDiv">
                <h1>Login Page</h1>
                <div className="inputFields">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <button> Login </button>
            </div>
        </div>
    )
}
