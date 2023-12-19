"use client";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function useWords(socket: Socket) {
  const [prevWord, setPrevWord] = useState<string>("");
  const [currWord, setCurrWord] = useState<string>("");
  const [nextWord, setNextWord] = useState<string>("");

  useEffect(() => {
    const newWordHandle = (newWord: string) => {
      setPrevWord(currWord);
      setCurrWord(nextWord);
      setNextWord(newWord);
    }

    const initializeHandle = (currWord: string, nextWord: string) => {
      setCurrWord(currWord);
      setNextWord(nextWord);
    }

    socket.on("new word", newWordHandle);
    socket.on("initialize", initializeHandle);

    return () => {
      socket.off("new word", newWordHandle);
      socket.off("initialize", initializeHandle);
    }
  }, [socket, prevWord, currWord, nextWord, setPrevWord, setCurrWord, setNextWord]);

  return {
    prevWord,
    currWord,
    nextWord
  };
}
