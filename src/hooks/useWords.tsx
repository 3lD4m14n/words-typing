"use client";
import { useEffect, useState } from "react";
import { API_GET_WORD } from "@/consts";

async function getWord() {
  return fetch(`${API_GET_WORD}`)
    .then((res) => res.json())
    .then((data) => data.word);
}

export default function useWords() {
  const [prevWord, setPrevWord] = useState<string>("");
  const [currWord, setCurrWord] = useState<string>("");
  const [nextWord, setNextWord] = useState<string>("");
  useEffect(() => {
    const fetchWords = async () => {
      const newCurrWord = await getWord();
      setCurrWord(newCurrWord);
      setNextWord(await getWord());
    };

    fetchWords();
  }, []);

  const setWord = async () => {
    setPrevWord(currWord);
    setCurrWord(nextWord);
    setNextWord(await getWord());
  };

  return {
    prevWord,
    currWord,
    nextWord,
    setWord,
  };
}
