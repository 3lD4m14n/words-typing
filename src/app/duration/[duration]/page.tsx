"use client";
import { useState, useEffect } from "react";
import useWords from "@/hooks/useWords";
import useTypingCheck from "@/hooks/useTypingCheck";
import useCountdown from "@/hooks/useCountdown";
import GameWords from "@/components/GameWords";

export default function Game({ params }: { params: { duration: number } }) {
  const { duration } = params;
  const [points, setPoints] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const { prevWord, currWord, nextWord, setWord } = useWords();
  const { isTimeOut, minutesRemaining, secondsRemaining } =
    useCountdown(duration);
  const { lettersTipped, error, finish } = useTypingCheck(currWord, isTimeOut);

  useEffect(() => {
    if (error) {
      setErrors(errors + 1);
    }
  }, [error]);

  useEffect(() => {
    const initializate = async () => {
      if (finish) {
        setWord();
        let plus = currWord.length * (10 * duration - errors);
        plus = plus < 1 ? 1 : plus;
        setPoints(points + plus);
      }
    };

    initializate();
  }, [finish]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-around">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">
          {isTimeOut ? "Game Finish" : "Type"}
        </h1>
        <p className="font-mono text-xl">
          Time Remaining: {minutesRemaining}:
          {(secondsRemaining < 10 ? "0" : "") + secondsRemaining}
        </p>
        <div className=" mt-8 flex w-80 justify-between text-3xl">
          <div className="flex flex-col items-center">
            <p>Points</p>
            <p>{points}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Errors</p>
            <p>{errors}</p>
          </div>
        </div>
      </div>
      <GameWords
        curr={currWord}
        prev={prevWord}
        next={nextWord}
        errorTiped={error}
        lettersTiped={lettersTipped}
        points={points}
      />
    </main>
  );
}
