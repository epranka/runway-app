import React from "react";

export default function Compass() {
  return (
    <div className="fixed top-20 right-2 md:top-20 md:right-10 w-8">
      <svg
        viewBox={`0 0 60 60`}
        width={60}
        height={60}
        style={{ maxWidth: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30,60 l0,-60" stroke="black" fill="none" strokeWidth="2" />
        <path
          d="M30,0 l5,10 l-10,0 l5,-10"
          fill="black"
          stroke="black"
          strokeWidth="2"
        />
        <text x="40" y="30">
          N
        </text>
      </svg>
    </div>
  );
}
