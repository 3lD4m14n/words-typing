"use client";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function useWords(socket: Socket) {
  const [prevWord, setPrevWord] = useState<string>("");
  const [currWord, setCurrWord] = useState<string>("");
  const [nextWord, setNextWord] = useState<string>("");

  useEffect(() => {
    socket.on("new word", (newWord: string) => {
      setWord(newWord);
    });

    socket.on("initialize", (currWord: string, nextWord: string) => {
      setCurrWord(currWord);
      setNextWord(nextWord);
    })
  }, [socket]);

  const setWord = (newWord: string) => {
    setPrevWord(currWord);
    setCurrWord(nextWord);
    setNextWord(newWord);
  };

  return {
    prevWord,
    currWord,
    nextWord
  };
}
