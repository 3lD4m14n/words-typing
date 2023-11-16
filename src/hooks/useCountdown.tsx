import { useState, useEffect } from "react";

const useCountdown = (minutes: number) => {
  const [minutesRemaining, setMinutesRemaining] = useState(minutes);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  useEffect(() => {
    if (minutesRemaining != 0 || secondsRemaining != 0) {
      setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);

        if (secondsRemaining <= 0) {
          setMinutesRemaining(minutesRemaining - 1);
          setSecondsRemaining(59);
        }
      }, 1000);
    }
  }, [minutes, secondsRemaining]);

  return {
    isTimeOut: minutesRemaining == 0 && secondsRemaining == 0,
    minutesRemaining,
    secondsRemaining,
  };
};

export default useCountdown;
