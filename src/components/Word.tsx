import { DEFAULT_COLOR, ERROR_COLOR, MAX_LETTERS } from "@/consts";

export interface wordProps {
  word: string | undefined;
  color?: string;
  error?: boolean;
  lettersColored: number | "all";
}

const Word = ({
  word,
  color = DEFAULT_COLOR,
  error = false,
  lettersColored,
}: wordProps) => {
  if (!word) return null;
  const letters = word.split("");
  const sufixKey = word;

  return (
    <ul className=" flex w-[80vw] items-center justify-center gap-1 text-base/[7.1vw] landscape:w-[32vw] landscape:text-lg/[3.1vw]">
      {letters.map((letter, index) => {
        if (
          lettersColored === "all" ||
          index < (error ? lettersColored + 1 : lettersColored)
        ) {
          return (
            <span
              className={`${
                index == lettersColored || lettersColored === "all"
                  ? ""
                  : "animated"
              } duration-600 rounded-md px-2 transition-colors`}
              key={`${sufixKey}-${index}`}
              style={{
                backgroundColor: index == lettersColored ? ERROR_COLOR : color,
              }}
            >
              {letter}
            </span>
          );
        } else {
          return (
            <span
              className="rounded-md px-2 transition-colors"
              key={`${sufixKey}-${index}`}
              style={{ backgroundColor: DEFAULT_COLOR }}
            >
              {letter}
            </span>
          );
        }
      })}
    </ul>
  );
};

export default Word;
