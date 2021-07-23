import React from "react";
import "./windDirectionAnimation.css";
import windDirectionSvg from "./WindDirectionSvg.svg";

function toRad(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export default function WindDirectionBackground(props) {
  const { windDirection } = props;

  if (windDirection === 0) return null;

  const deg = windDirection;

  const width =
    window.innerHeight * Math.abs(Math.sin(toRad(deg))) +
    window.innerWidth * Math.abs(Math.cos(toRad(deg)));
  const height =
    window.innerWidth * Math.abs(Math.sin(toRad(deg))) +
    window.innerHeight * Math.abs(Math.cos(toRad(deg)));

  const deltaX = (window.innerWidth - width) / 2;
  const deltaY = (window.innerHeight - height) / 2;

  return (
    <div
      className="fixed"
      style={{
        opacity: 0.07,
        top: deltaY,
        left: deltaX,
        width,
        height,
        background: `url('${windDirectionSvg}')`,
        animation: "animateBackground",
        animationDuration: "3s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        transform: `rotate(${deg}deg)`,
        transformOrigin: "center center",
      }}
    ></div>
  );
}
