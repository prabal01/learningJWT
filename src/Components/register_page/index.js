import React from 'react'
import { DivCard } from './register_component'
import "./style.css"
export default function SignUpPage(props) {
    return (
        <div>
            <DivCard handler={props.handler}/>
        </div>
    )
}
