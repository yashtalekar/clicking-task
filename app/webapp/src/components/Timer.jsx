import React, {useEffect, useRef, useState} from "react";


// Reference: https://devtrium.com/posts/set-interval-react
const Timer = (props) => {
    // const [counter, setCounter] = useState(5);

    let counter = props.timer
    let setCounter = props.setTimer
    
    let intervalID = useRef(null);

    useEffect(() => {

        if (counter > 0) {
            intervalID.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
        }
        
    
        return () => clearInterval(intervalID.current);
      }, [counter]);

    return <div >Timer: {counter}</div>
    //style={{"marginLeft": "350px"}}
}

export default Timer;