import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const padNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div className="p-6 text-center rounded-2xl shadow-xl max-w-sm mx-auto mt-10 bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white">
      {/* Greeting */}
      <h2 className="text-2xl font-bold mb-2 text-blue-400 drop-shadow-lg">
        {getGreeting()}
      </h2>
      <p className="mb-6 italic text-gray-300 tracking-wide select-none">
        "Every second counts — make them shine!"
      </p>

      {/* Rings container */}
      <div className="flex flex-row justify-center gap-6">
        {/* Hour Ring */}
        <div
          className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-8 border-red-500 bg-gradient-to-br from-red-700 to-red-900
          shadow-[0_0_20px_#f87171] animate-pulse"
        >
          <span className="text-4xl font-mono font-extrabold drop-shadow-md">
            {padNumber(time.getHours())}
          </span>
          <span className="mt-1 text-sm uppercase tracking-wide text-red-300 select-none">
            Hour
          </span>
        </div>

        {/* Minute Ring */}
        <div
          className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-8 border-green-500 bg-gradient-to-br from-green-700 to-green-900
          shadow-[0_0_20px_#34d399] animate-pulse"
        >
          <span className="text-4xl font-mono font-extrabold drop-shadow-md">
            {padNumber(time.getMinutes())}
          </span>
          <span className="mt-1 text-sm uppercase tracking-wide text-green-300 select-none">
            Minute
          </span>
        </div>

        {/* Second Ring */}
        <div
          className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-8 border-blue-500 bg-gradient-to-br from-blue-700 to-blue-900
          shadow-[0_0_20px_#60a5fa] animate-pulse"
        >
          <span className="text-4xl font-mono font-extrabold drop-shadow-md">
            {padNumber(time.getSeconds())}
          </span>
          <span className="mt-1 text-sm uppercase tracking-wide text-blue-300 select-none">
            Second
          </span>
        </div>
      </div>

      {/* Inspirational footer */}
      <p className="mt-8 text-xs text-gray-400 italic max-w-xs mx-auto px-4">
        Time flows like a river — use it wisely and beautifully.
      </p>
    </div>
  );
};

export default ClockComponent;
