import WordNoPlayable from "./WordNoPlayable";
import { SUCCESS_COLOR } from "@/consts";

interface wordPrevProps {
  word: string | undefined;
}

export default function WordPrev({ word }: wordPrevProps) {
  return <WordNoPlayable word={word} color={SUCCESS_COLOR} />;
}
