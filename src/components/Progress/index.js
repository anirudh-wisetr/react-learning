import { useEffect, useState } from "react";


export default function ProgressBar() {
  const [bar, setBar] = useState(MIN_VALUE);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval running");
      setBar((prevBarValue) => {
        if (prevBarValue >= MAX_VALUE) {
          clearInterval(interval);
          return prevBarValue;
        }
        return prevBarValue + INTERVAL_INCREMENT;
      });
    }, INTERVAL_SPEED_IN_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - MAX_VALUE}%)` }}
        className="progress"
      ></div>
    </div>
  );
}

// constant.js 
const MIN_VALUE = 0;
const MAX_VALUE = 100;
const INTERVAL_SPEED_IN_MS = 150;
const INTERVAL_INCREMENT = 5;


// 1. I could use width also but it's not best way so use translateX. And don't use var(). Instead use style={{ transform: `translateX(${bar - MAX_VALUE}%)` }}
// 2. ALways use constants.js file 