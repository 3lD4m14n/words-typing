"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function Home() {
  const router = useRouter();
  const [duration, setDuration] = useState(3);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    router.push(`duration/${duration}`);
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
