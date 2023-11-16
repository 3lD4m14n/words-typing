"use client";
import React, { useEffect, useState } from "react";
import { API_GET_WORD } from "@/consts";

async function getWord(min: number, max: number) {
  return fetch(`${API_GET_WORD}/${min}/${max}`)
    .then((res) => res.json())
    .then((data) => data.word);
}

export default function useWords(min: number, max: number) {
  const [prevWord, setPrevWord] = useState<string>("");
  const [currWord, setCurrWord] = useState<string>("");
  const [nextWord, setNextWord] = useState<string>("");
  useEffect(() => {
    const fetchWords = async () => {
      const newCurrWord = await getWord(min, max);
      setCurrWord(newCurrWord);
      setNextWord(await getWord(min, max));
    };

    fetchWords();
  }, []);

  const setWord = async () => {
    setPrevWord(currWord);
    setCurrWord(nextWord);
    setNextWord(await getWord(min, max));
  };

  return {
    prevWord,
    currWord,
    nextWord,
    setWord,
  };
}
