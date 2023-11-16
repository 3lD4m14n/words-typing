import WordNoPlayable from "./WordNoPlayable";
import { SUCCESS_COLOR } from "@/consts";

interface wordPrevProps {
  word: string | undefined;
  sufixKey: string;
}

export default function WordPrev({ word, sufixKey }: wordPrevProps) {
  return (
    <WordNoPlayable word={word} color={SUCCESS_COLOR} sufixKey={sufixKey} />
  );
}
