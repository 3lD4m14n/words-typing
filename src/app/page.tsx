"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import useMinMaxWords from "@/hooks/useMinMaxWords";

function ButtonDuration({
  duration,
  checked,
  setDuration,
}: {
  duration: number;
  checked?: boolean;
  setDuration: (duration: number) => void;
}) {
  return (
    <div className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-around rounded-xl bg-orange-500 text-lg font-semibold outline-dashed outline-transparent transition-colors hover:bg-orange-600">
      <label
        htmlFor={`duration-${duration}`}
        className="flex h-3/4 w-full cursor-pointer flex-col items-center justify-around"
      >
        <h2>{duration}</h2>
        <p>Minutes</p>
      </label>
      <input
        type="radio"
        checked={checked}
        id={`duration-${duration}`}
        name="duration"
        value={duration}
        onChange={(e) => {
          if (e.target.checked) setDuration(duration);
        }}
        className="w-full cursor-pointer"
      />
    </div>
  );
}

function Counter({
  value,
  increment,
  decrement,
}: {
  value: number;
  increment: () => void;
  decrement: () => void;
}) {
  return (
    <div className="flex h-10 w-28 rounded-full border-2 border-blue-950 text-xl">
      <button
        type="button"
        onClick={increment}
        className="flex w-full items-center justify-center rounded-l-full bg-orange-500 text-center transition-colors hover:bg-orange-600"
      >
        +
      </button>
      <p className="flex w-full items-center justify-center text-center">
        {value}
      </p>
      <button
        type="button"
        onClick={decrement}
        className="flex w-full items-center justify-center rounded-r-full bg-orange-500 text-center transition-colors hover:bg-orange-600"
      >
        -
      </button>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [duration, setDuration] = useState(3);
  const { min, max, incrementMin, decrementMin, incrementMax, decrementMax } =
    useMinMaxWords(1, 10);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    router.push(`duration/${duration}/minLen/${min}/maxLen/${max}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex h-screen w-screen flex-col items-center justify-evenly"
    >
      <div className="flex w-full flex-wrap justify-evenly gap-5">
        <div className="flex flex-col items-center gap-2">
          <h2 className="border-b-4 border-dotted border-blue-500 text-3xl font-bold">
            Duration
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            <li>
              <ButtonDuration setDuration={setDuration} duration={1} />
            </li>
            <li>
              <ButtonDuration setDuration={setDuration} duration={3} />
            </li>
            <li>
              <ButtonDuration setDuration={setDuration} duration={5} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="border-b-4 border-dotted border-blue-500 text-3xl font-bold">
            Words Length
          </h2>
          <div className="flex h-[100px] w-full items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">MIN</h3>
              <Counter
                value={min}
                increment={incrementMin}
                decrement={decrementMin}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">MAX</h3>
              <Counter
                value={max}
                increment={incrementMax}
                decrement={decrementMax}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="rounded-full bg-orange-500 p-2 text-3xl hover:bg-orange-600"
      >
        Start
      </button>
    </form>
  );
}
