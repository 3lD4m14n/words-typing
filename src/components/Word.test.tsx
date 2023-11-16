import { render, screen } from "@testing-library/react";
import Word from "./Word";
import { wordProps } from "./Word";
import "@testing-library/jest-dom";
import { DEFAULT_COLOR, SUCCESS_COLOR } from "../consts";

describe("Base component for Words", () => {
  let props: wordProps = {
    word: "test",
    color: SUCCESS_COLOR,
    lettersColored: "all",
    sufixKey: "key",
  };

  render(<Word {...props} />);
  let letters = screen.getAllByRole("generic");

  it("should render the word", () => {
    if (!props.word) throw new Error("Word is undefined");
    expect(letters).toHaveLength(props.word.length + 1);
    for (let i = 1; i < letters.length; i++) {
      expect(letters[i]).toHaveTextContent(props.word[i - 1]); //its i-1 because the first letter is a div that encapsulates the word
    }
  });

  it("should render the word with the correct color", () => {
    expect(letters[1]).toHaveStyle(`background-color: ${props.color}`);
  });

  it('should every letter are colored with the prop lettersColored: "all"', () => {
    for (let i = 1; i < letters.length; i++) {
      expect(letters[i]).toHaveStyle(`background-color: ${props.color}`);
    }
  });

  it("should every letter are not colored with the prop lettersColored: 0", () => {
    let props: wordProps = {
      word: "test",
      color: SUCCESS_COLOR,
      lettersColored: 0,
      sufixKey: "key",
    };

    render(<Word {...props} />);
    let letters = screen.getAllByRole("generic");

    for (let i = 1; i < letters.length; i++) {
      expect(letters[i]).toHaveStyle(`background-color: ${DEFAULT_COLOR}`);
    }
  });

  it("should N number of letters are colored with the prop lettersColored: N", () => {
    let props: wordProps = {
      word: "test",
      color: SUCCESS_COLOR,
      lettersColored: 2,
      sufixKey: "key",
    };

    render(<Word {...props} />);
    let letters = screen.getAllByRole("generic");

    for (let i = 1; i < letters.length; i++) {
      if (
        typeof props.lettersColored === "number" &&
        i <= props.lettersColored
      ) {
        expect(letters[i]).toHaveStyle(`background-color: ${props.color}`);
      } else {
        expect(letters[i]).toHaveStyle(`background-color: ${DEFAULT_COLOR}`);
      }
    }
  });
});
