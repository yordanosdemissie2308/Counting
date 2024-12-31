"use client";
import React from "react";

import { TimerProvider, useTimer } from "./Context/page";

const Home = () => {
  const { start, isPaused, handleTimer, resetTimer } = useTimer();

  const formattedTime = `${String(Math.floor(start / 60)).padStart(2, "0")}:${String(start % 60).padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Center content */}
      <div className="rounded shadow-md p-8 bg-white"> {/* Added padding and background color */}
        <div className="text-4xl font-bold text-center text-gray-700 bg-gray-200 rounded-lg py-4 px-8 shadow-md">
          {formattedTime}
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-opacity disabled:opacity-50"
            onClick={handleTimer}
          >
            {isPaused ? "Start" : "Pause"}
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-opacity disabled:opacity-50"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <TimerProvider>
      <Home />
    </TimerProvider>
  );
}
