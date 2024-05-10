import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [timeInSec, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStart = () => {
    // setTime((prevTime) => prevTime + 1)
    setTimerOn((prevTimerState) => !prevTimerState);
  };

  const handleReset = () => {
    setTime(0);
    setTimerOn(false);
  };

  useEffect(() => {
    let myTimer;

    if (timerOn) {
      myTimer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(myTimer);
    }

    return () => clearInterval(myTimer);
  }, [timerOn]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "aquamarine",
        color: "black",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "monospace",
        borderRadius: "5px",
        border: "none",
      }}
    >
      <h4>Stopwatch</h4>

      <h4>Time: {formatTime(timeInSec)}</h4>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        <button onClick={handleStart}>{timerOn ? "Stop" : "Start"}</button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
