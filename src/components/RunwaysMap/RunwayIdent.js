import React from "react";

export default function RunwayIdent(props) {
  const {
    activeSide,
    isCrosswind,
    scaleX,
    scaleY,
    originY,
    svgWidth,
    svgHeight,
    he_heading,
    leIdentRectX,
    leIdentRectY,
    identRectWidth,
    identRectHeight,
    identRectStroke,
    leIdentRotation,
    identX,
    leIdentY,
    le_ident,
    heIdentRectX,
    heIdentRectY,
    heIdentY,
    heIdentRotation,
    he_ident,
    originAtCenter,
  } = props;

  return (
    <svg
      className="runway-ident"
      style={{
        position: "absolute",
        userSelect: "none",
        zIndex: 2,
        transform: `${
          !originAtCenter
            ? `translate(${scaleX}px, calc(${scaleY}px - 50%))`
            : ""
        } rotate(${he_heading}deg)`,
        transformOrigin: !originAtCenter ? `center ${originY}px` : undefined,
      }}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={svgWidth}
      height={svgHeight}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x={leIdentRectX}
          y={leIdentRectY}
          rx="5"
          width={identRectWidth}
          height={identRectHeight}
          stroke="black"
          strokeWidth={identRectStroke}
          fill={
            activeSide === "le"
              ? isCrosswind
                ? "#f5ca5f"
                : "#74da74"
              : "white"
          }
        ></rect>
        <text
          x={identX}
          y={leIdentY}
          fontSize="2.6rem"
          textAnchor="middle"
          dominantBaseline="central"
          transform={`rotate(${leIdentRotation} ${identX} ${leIdentY})`}
        >
          {le_ident}
        </text>
      </g>
      <g>
        <rect
          x={heIdentRectX}
          y={heIdentRectY}
          rx="5"
          width={identRectWidth}
          height={identRectHeight}
          stroke="black"
          strokeWidth={identRectStroke}
          fill={
            activeSide === "he"
              ? isCrosswind
                ? "#f5ca5f"
                : "#74da74"
              : "white"
          }
        ></rect>
        <text
          x={identX}
          y={heIdentY}
          fontSize="2.6rem"
          textAnchor="middle"
          dominantBaseline="central"
          transform={`rotate(${heIdentRotation} ${identX} ${heIdentY})`}
        >
          {he_ident}
        </text>
      </g>
    </svg>
  );
}
