import WordNoPlayable from "./WordNoPlayable";

interface WordNextProps {
  word: string | undefined;
  sufixKey: string;
}

export default function WordNext({ word, sufixKey }: WordNextProps) {
  return <WordNoPlayable word={word} sufixKey={sufixKey} />;
}
