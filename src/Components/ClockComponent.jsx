import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Example: 10:23:12 AM
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="p-4 text-center text-blue-500 rounded-2xl shadow-xl w-72 mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-2">{getGreeting()}</h2>
      <div className="text-4xl font-mono">{formatTime(time)}</div>
      <div></div>
    </div>
  );
};

export default ClockComponent;
