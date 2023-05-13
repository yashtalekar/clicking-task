import React, {useEffect, useRef, useState} from "react";

const RadioButton = ({ label, value, checked,onChange }) => {
    return (
      <label>
        <input type="radio" value={value} checked={checked} onChange={onChange} />
        {label}
      </label>
    );
  };


// Reference: https://dev.to/collegewap/how-to-work-with-radio-buttons-in-react-3e0o
const Instructions = (props) => {

    //console.log(props);
    let gamerType = props.gamerType;
    let setGamerType = props.setGamerType;

    let setReadingInstructions = props.setReadingInstructions;

    

    const handleChange = (e) => {
        // console.log(e.target.value);
        setGamerType(e.target.value);
    }

    const onSubmitInstructions = (e) => {
        setReadingInstructions(false);
    }

    

    return <div className="instructions-container"> 
        <h1>Clicking Task</h1>

        <p>
            This is a target clicking task which measures your accuracy and speed. Once you click next, you will have 90 seconds to click on as many of the red targets as you can. 
            After your time is up, submit your score using the submit button.</p>
        <p>
            Before you start the task by clicking next, please fill out this small form which best describes your background regarding video games.
        </p>

        <form >
            <RadioButton
                label="PC-Gamer"   
                value="PC-Gamer"         
                checked={gamerType === "PC-Gamer"}
                onChange={handleChange}
            />
            <br/>

            <RadioButton
                label="Console-Gamer"
                value="Console-Gamer"
                checked={gamerType === "Console-Gamer"}
                onChange={handleChange}
            />
            <br/>

            <RadioButton
                label="Mobile-Gamer"
                value="Mobile-Gamer"
                checked={gamerType === "Mobile-Gamer"}
                onChange={handleChange}
            />
            <br/>
            
            <RadioButton
                label="Non-Gamer"
                value="Non-Gamer"
                checked={gamerType === "Non-Gamer"}
                onChange={handleChange}
            />
            <br/>

            <button 
                className="btn btn-outline"
                style={{ width: "fit-content" }}
                onClick={onSubmitInstructions}
            >
                Understood, Next!
            </button>
            <br/>
        </form>
      
    </div>



}

export default Instructions