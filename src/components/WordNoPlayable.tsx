import { DEFAULT_COLOR } from "@/consts";
import Word from "./Word";

interface WordNoPlayableProps {
  word: string | undefined;
  color?: string;
}

export default function WordNoPlayable({
  word,
  color = DEFAULT_COLOR,
}: WordNoPlayableProps) {
  return <Word word={word} color={color} lettersColored="all" />;
}
