import React, {useState} from 'react';
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(true);
    let [age , setAge] = useState(24);
    let [temp, setTemp] = useState(35);

    return (
        <div className={`room ${isLit? "lit": "dark"}`}>
        This Room is {isLit? 'Lit': 'dark'}
        <br />
        Age: {age}
        <br/>
        Temperature: {temp}
        <br/>
        <button onClick={() => setLit(!isLit)} >Toggle Light</button>
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
            Increase Age
        </button>
        <br/>
        <button onClick={() => {
                        console.log("increase temp arrow function");
                        setTemp(++temp);
                        }}></button>
        
        <button onClick={ ()=> {
                        console.log("Increase temp arrow function");
                        setTemp(--temp);
                        }}>
            Increase Temperature
            </button>

    </div>
    
    
  );
}

export default Room;