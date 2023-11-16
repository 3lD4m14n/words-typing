import { cleanup, render, screen } from "@testing-library/react";
import GameWords from "./GameWords";
import { GameWordsProps } from "./GameWords";
import "@testing-library/jest-dom";

describe("Game Prev, Curr and Next Words render", () => {
  const wordsText = ["word1", "word2", "word3"];

  let props: GameWordsProps = {
    prev: wordsText[0],
    curr: wordsText[1],
    next: wordsText[2],
    lettersTiped: 0,
    errorTiped: false,
    points: 0,
  };
  render(<GameWords {...props} />);
  let words = screen.getAllByRole("list");

  it("should render 3 words", () => {
    expect(words.length).toBe(3);
  });

  it("should render 3 words with correct text", () => {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].children.length; j++) {
        expect(words[i].children.item(j)).toHaveTextContent(wordsText[i][j]);
      }
    }
  });

  cleanup();
});
