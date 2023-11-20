import WordPrev from "./WordPrev";
import WordPlayable from "./WordPlayable";
import WordNext from "./WordNext";

export interface GameWordsProps {
  prev: string | undefined;
  curr: string;
  next: string;
  lettersTiped: number;
  errorTiped: boolean;
  points: number;
}

export default function GameWords({
  prev,
  curr,
  next,
  lettersTiped,
  errorTiped,
  points,
}: GameWordsProps) {
  return (
    <div className=" flex h-full w-screen flex-wrap items-center justify-around gap-2">
      {<WordPrev word={prev ? prev : " "} key={prev} />}
      {curr && (
        <WordPlayable
          word={curr}
          lettersColored={lettersTiped}
          error={errorTiped}
          key={curr}
        />
      )}
      {next && <WordNext word={next} key={next} />}
    </div>
  );
}
