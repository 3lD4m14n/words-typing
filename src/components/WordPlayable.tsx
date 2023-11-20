import { useState } from "react";
import Word from "./Word";
import { SUCCESS_COLOR, ERROR_COLOR } from "@/consts";

interface wordPlayableProps {
  word: string;
  lettersColored: number;
  error: boolean;
}

export default function WordPlayable({
  word,
  lettersColored,
  error,
}: wordPlayableProps) {
  return (
    <Word
      word={word}
      color={SUCCESS_COLOR}
      lettersColored={lettersColored}
      error={error}
    />
  );
}
