import React, {useEffect, useRef, useState} from "react";


// Reference: Adapted from https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const CanvasComponent = (props) => {
    // console.log(props);
    let setScore = props.setScore;
    let score = props.score;

    let canvasClicks = props.canvasClicks;
    let setCanvasClicks = props.setCanvasClicks;

    const canvasRef = useRef(null);
    const radius = 10;

    let timer = props.timer;

    // Draws a circe with centre at (x,y) and radius r.
    // Note that canvas' origin is the top left corner.
    const drawCircle = (ctx, x, y, r) => {
        ctx.fillStyle = '#880000';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.fill();
    }

    // Produces random centre coords for a circle of radius r so that it doesnt exceed the canvas 
    // boundaries.
    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const randomCoords = (r, canvasWidth, canvasHeight) => {
        const xMax = canvasWidth - r;
        const xMin = r;
        const x = Math.floor(Math.random() * (xMax - xMin) + xMin); // Max exclusive, min inclusive.

        const yMax = canvasHeight - r;
        const yMin = r;
        const y = Math.floor(Math.random() * (yMax - yMin) + yMin);

        return [x, y];
    }

    const distance = (centerCoords, clickCoords) => {
        return Math.sqrt((centerCoords[0] - clickCoords[0]) * (centerCoords[0] - clickCoords[0]) + 
            (centerCoords[1] - clickCoords[1]) * (centerCoords[1] - clickCoords[1]));

    }

    const [centerCoords, setCenterCoords] = useState([randomCoords(10, 800, 600), 
        randomCoords(10, 800, 600), randomCoords(10, 800, 600)])

    useEffect(()  => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, 800, 600);

        // Our first draw
        // drawCircle(context, 100, 100, 10);

        // Draw 3 random circles
        // const [x, y] = randomCoords(10, 800, 600);
        centerCoords.forEach( (currentValue) => { 
            drawCircle(context, currentValue[0], currentValue[1], 10);
        })

        // drawCircle(context, center1[0], center1[1], 10)
        // drawCircle(context, center2[0], center2[1], 10)
        // drawCircle(context, center3[0], center3[1], 10)

        const handleClick = (e) => {

            // Accuracy handler here.
            setCanvasClicks(canvasClicks + 1);

            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            centerCoords.forEach((currentValue, index) => {
                if (distance(currentValue, [mouseX, mouseY]) < radius) {
    
                    // Increment score function here.
                    setScore(score + 1);
    
                    const nextCenterCoords = centerCoords.map((c, i) => {
                        if (i == index) {
                            // Change the clicked target.
                            return randomCoords(10, 800, 600);
                        } else {
                            // Leave the rest of the targets.
                            return c;
                        }
                    });
                    setCenterCoords(nextCenterCoords);
                }
            });
        }
        canvas.addEventListener("click", handleClick);

        return () => {
            canvas.removeEventListener("click", handleClick);
        }

    }, [centerCoords, score, canvasClicks])

    
    // If the task timedout, canvas shouldn't be visible. 
    if (timer == 0) {
        return <div >Your time's up!</div>
    }


    return <canvas ref={canvasRef} width={800} height={600} style={{border: "1px solid black", display: "inline"}}/>
}

export default CanvasComponent;