import WordNoPlayable from "./WordNoPlayable";

interface WordNextProps {
  word: string | undefined;
}

export default function WordNext({ word }: WordNextProps) {
  return <WordNoPlayable word={word} />;
}
