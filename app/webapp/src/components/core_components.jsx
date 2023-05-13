/*
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, {useState} from "react";
import CanvasComponent from "./CanvasComponent.jsx";
import Timer from "./Timer.jsx";
import Instructions from "./InstructionsComponent.jsx";

function OnboardingComponent({ onSubmit }) {
  return (
    <div>
      <Directions>
        This component only renders if you have chosen to assign an onboarding
        qualification for your task. Click the button to move on to the main
        task.
      </Directions>
      <div
        style={{
          width: "100%",
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button
          className="button is-success"
          style={{ width: "fit-content", marginBottom: "0.65rem" }}
          onClick={() => onSubmit({ success: true })}
        >
          Move to Main Task
        </button>
        <button
          className="button is-danger"
          style={{ width: "fit-content" }}
          onClick={() => onSubmit({ success: false })}
        >
          Get Blocked
        </button>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return <Directions>Loading...</Directions>;
}

function Directions({ children }) {
  return (
    <section className="hero is-light" data-cy="directions-container">
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5">{children}</p>
        </div>
      </div>
    </section>
  );
}

function SimpleFrontend({ taskData, isOnboarding, onSubmit, onError }) {

  // State for instructions
  const [readingInstructions, setReadingInstructions] = useState(true);

  // State for type of worker
  const [gamerType, setGamerType] = React.useState('PC-Gamer');

  // State for score.
  const [score, setScore] = useState(0);
  
  // State for accuracy.
  const [canvasClicks, setCanvasClicks] = useState(0);

  // State for timer
  const [timer, setTimer] = useState(90)

  const calculateAccuracy = (totalClicks, totalHits) => {
    if (totalClicks == 0 && totalHits == 0) {
      return 0;
    }
    return (totalHits/totalClicks).toFixed(3);
  }


  return (
    <div style={{ padding: "50px", marginRight: "auto", marginLeft: "auto", width: "50%", textAlign: "center" }}>
      { readingInstructions === true && 
        <Instructions onSubmit={onSubmit} setReadingInstructions={setReadingInstructions} gamerType={gamerType} setGamerType={setGamerType}/>
      }
      {
        readingInstructions === false &&
      <div>
        <CanvasComponent score={score} setScore={setScore} canvasClicks={canvasClicks} 
          setCanvasClicks={setCanvasClicks} timer={timer}/>
        <Timer timer={timer} setTimer={setTimer}/>
        
        <button 
          className="btn btn-outline"
          style={{ width: "fit-content" }}
          onClick={() => onSubmit({ gamerType: gamerType, score: score , accuracy: calculateAccuracy(canvasClicks,score)})
          }
        >Submit Score</button>
        The current score is: {score}.
        The current accuracy is {calculateAccuracy(canvasClicks,score)}
        
      </div>
      }
    </div>
  );
}

export { LoadingScreen, SimpleFrontend as BaseFrontend, OnboardingComponent };
