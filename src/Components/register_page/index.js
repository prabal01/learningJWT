import React, {useEffect,useState} from 'react'
import { DivCard } from './register_component'
import "./style.css"
import axios from "axios"

export default function SignUpPage(props) {
    const [stateName, setStateName] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/stateAPI").then((data)=>{
            let temp=[]
            for(var index in data.data){
                temp.push(data.data[index])
            }
            setStateName(temp)
    })
        
    

    }, [])
    return (
        <div>
            <DivCard handler={props.handler} states={stateName} allCities={props.allCities} data={props.data}/>
        </div>
    )
}
