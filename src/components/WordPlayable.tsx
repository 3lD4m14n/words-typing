import { useState } from "react";
import Word from "./Word";
import { SUCCESS_COLOR, ERROR_COLOR } from "@/consts";

interface wordPlayableProps {
  word: string;
  lettersColored: number;
  error: boolean;
  sufixKey: string;
}

export default function WordPlayable({
  word,
  lettersColored,
  error,
  sufixKey,
}: wordPlayableProps) {
  return (
    <Word
      word={word}
      color={SUCCESS_COLOR}
      lettersColored={lettersColored}
      sufixKey={sufixKey}
      error={error}
    />
  );
}
