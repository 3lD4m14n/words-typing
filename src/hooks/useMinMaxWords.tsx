import { MAX_LETTERS, MIN_LETTERS } from "@/consts";
import { useState } from "react";

export default function useMinMaxWords(minValue: number, maxValue: number) {
  const [min, setMin] = useState(MIN_LETTERS);
  const [max, setMax] = useState(MAX_LETTERS);

  const incrementMin = () => {
    if (min < max) setMin(min + 1);
  };

  const decrementMin = () => {
    if (min > minValue) setMin(min - 1);
  };

  const incrementMax = () => {
    if (max < maxValue) setMax(max + 1);
  };

  const decrementMax = () => {
    if (max > min) setMax(max - 1);
  };

  return {
    min,
    max,
    incrementMin,
    decrementMin,
    incrementMax,
    decrementMax,
  };
}
