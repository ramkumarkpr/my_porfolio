import React, { useEffect, useState } from "react";

const CircleProgressComponent = ({ percentage, color = "#3b82f6" }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // animation duration in ms
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = percentage / totalFrames;

    const animate = () => {
      start += increment;
      if (start < percentage) {
        setProgress(start);
        requestAnimationFrame(animate);
      } else {
        setProgress(percentage); // Ensure it ends exactly at the target
      }
    };

    animate();
  }, [percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.1s linear",
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="text-sm fill-white"
        >
          {Math.round(progress)}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgressComponent;
