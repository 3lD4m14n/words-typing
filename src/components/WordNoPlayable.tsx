import { DEFAULT_COLOR } from "@/consts";
import Word from "./Word";

interface WordNoPlayableProps {
  word: string | undefined;
  color?: string;
  sufixKey: string;
}

export default function WordNoPlayable({
  word,
  color = DEFAULT_COLOR,
  sufixKey,
}: WordNoPlayableProps) {
  return (
    <Word word={word} color={color} lettersColored="all" sufixKey={sufixKey} />
  );
}
