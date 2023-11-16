import { useState, useEffect } from "react";

const useTypingCheck = (wordCheking: string, isTimeOut: boolean) => {
  const [lettersTipped, setLettersTipped] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!isTimeOut) {
      if (!event.repeat) {
        const typedLetter = event.key.toLowerCase();
        const currentLetter = wordCheking.charAt(lettersTipped).toLowerCase();

        if (typedLetter === currentLetter) {
          setLettersTipped(lettersTipped + 1);
          setError(false);
          if (wordCheking && wordCheking.length === lettersTipped + 1) {
            setFinish(true);
            return;
          }
        } else {
          setError(true);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [wordCheking, lettersTipped, isTimeOut]);

  useEffect(() => {
    setLettersTipped(0);
    setError(false);
    setFinish(false);
  }, [wordCheking]);

  return {
    lettersTipped,
    error,
    finish,
  };
};

export default useTypingCheck;
