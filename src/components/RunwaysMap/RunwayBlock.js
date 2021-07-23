import React from "react";

export default function RunwayBlock(props) {
  const {
    activeSide,
    isCrosswind,
    le_ident,
    he_ident,
    scaleX,
    scaleY,
    he_heading,
    originY,
    svgWidth,
    svgHeight,
    rwyX,
    rwyY,
    scaleWidth,
    scaleLength,
    rwyLineBottomX,
    rwyLineBottomY,
    rwyLineTopX,
    rwyLineTopY,
    originAtCenter,
  } = props;

  const mark1Width = (scaleWidth / 2) * 0.5;
  const mark2Width = scaleWidth / 2;

  return (
    <svg
      className="runway"
      style={{
        position: "absolute",
        userSelect: "none",
        zIndex: 1,
        transform: `${
          !originAtCenter
            ? `translate(${scaleX}px, calc(${scaleY}px - 50%))`
            : ""
        }  rotate(${he_heading}deg)`,
        transformOrigin: !originAtCenter ? `center ${originY}px` : undefined,
      }}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={svgWidth}
      height={svgHeight}
      xmlns="http://www.w3.org/2000/svg"
    >
      {activeSide === "le" ? (
        <pattern
          id={"arrow" + le_ident}
          x={0}
          y={0}
          width={1}
          height={0.1}
          viewBox={`0 0 ${scaleWidth} 40`}
          patternUnits="objectBoundingBox"
        >
          <animateTransform
            attributeType="xml"
            attributeName="patternTransform"
            type="translate"
            dur="1.2s"
            values={`0,0; 0,${scaleLength * 0.1}`}
            repeatCount="indefinite"
          />
          <path
            fill={isCrosswind ? "#f5ca5f" : "#74da74"}
            d={`M${0},${0} l${scaleWidth / 2},${20} l${
              scaleWidth / 2
            },${-20} l${0},${20} l${-scaleWidth / 2},${20} l${
              -scaleWidth / 2
            },${-20} l${0},${-20}`}
          ></path>
        </pattern>
      ) : activeSide === "he" ? (
        <pattern
          id={"arrow" + he_ident}
          x={0}
          y={0}
          width={1}
          height={0.1}
          viewBox={`0 0 ${scaleWidth} 40`}
          patternUnits="objectBoundingBox"
        >
          <animateTransform
            attributeType="xml"
            attributeName="patternTransform"
            type="translate"
            dur="1.2s"
            values={`0,0; 0,-${scaleLength * 0.1}`}
            repeatCount="indefinite"
          />
          <path
            fill={isCrosswind ? "#f5ca5f" : "#74da74"}
            d={`M${0},${40} l${scaleWidth / 2},${-20} l${
              scaleWidth / 2
            },${20} l${0},${20} l${-scaleWidth / 2},${-20} l${
              -scaleWidth / 2
            },${20} l${0},${-20}`}
          ></path>
        </pattern>
      ) : null}
      <pattern
        id={`mark${le_ident}`}
        x={rwyX + 2}
        y={rwyY}
        width={4}
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <line
          x1={0}
          y1={0}
          x2={0}
          y2={20}
          strokeWidth={3}
          stroke="#868686"
        ></line>
      </pattern>
      <defs>
        <g id={`mark1${le_ident}`}>
          <line
            x1={mark1Width / 3}
            y1={0}
            x2={mark1Width / 3}
            y2={15}
            stroke="#868686"
            strokeWidth="1"
          />
          <line
            x1={(mark1Width / 3) * 2}
            y1={0}
            x2={(mark1Width / 3) * 2}
            y2={15}
            stroke="#868686"
            strokeWidth="1"
          />
          <line
            x1={(mark1Width / 3) * 3}
            y1={0}
            x2={(mark1Width / 3) * 3}
            y2={15}
            stroke="#868686"
            strokeWidth="1"
          />
        </g>
        <g id={`mark2${le_ident}`}>
          <line
            x1={mark2Width / 4}
            y1={0}
            x2={mark2Width / 4}
            y2={15}
            stroke="#868686"
            strokeWidth="1"
          />
          <line
            x1={mark2Width / 2}
            y1={0}
            x2={mark2Width / 2}
            y2={15}
            stroke="#868686"
            strokeWidth="1"
          />
        </g>
      </defs>
      <g>
        <rect
          x={rwyX}
          y={rwyY}
          width={scaleWidth}
          height={scaleLength}
          stroke="black"
          strokeWidth="2"
          fill="black"
          rx="3"
        />
        <rect
          x={rwyX}
          y={rwyY}
          width={scaleWidth}
          height={scaleLength}
          stroke="black"
          strokeWidth="2"
          fill={
            activeSide
              ? `url(#arrow${activeSide === "le" ? le_ident : he_ident})`
              : null
          }
          rx="3"
        />
        {/* Le markings */}
        <rect
          fill={`url(#mark${le_ident})`}
          x={rwyX}
          y={rwyY + 10}
          width={scaleWidth}
          height={20}
        />
        <use x={rwyX} y={rwyY + 60} href={`#mark1${le_ident}`} />
        <use
          x={rwyX + scaleWidth / 1.5}
          y={rwyY + 60}
          href={`#mark1${le_ident}`}
        />
        <use x={rwyX} y={rwyY + 120} href={`#mark2${le_ident}`} />
        <use
          x={rwyX + scaleWidth / 1.5 - 1}
          y={rwyY + 120}
          href={`#mark2${le_ident}`}
        />
        <rect
          fill={`url(#mark${le_ident})`}
          x={rwyX}
          y={rwyY + 10}
          width={scaleWidth}
          height={20}
        />
        {/* He markings */}
        <rect
          fill={`url(#mark${le_ident})`}
          x={rwyX}
          y={rwyY + scaleLength - 20 - 10}
          width={scaleWidth}
          height={20}
        />
        <use
          x={rwyX}
          y={rwyY + scaleLength - 15 - 10 - 60}
          href={`#mark1${le_ident}`}
        />
        <use
          x={rwyX + scaleWidth / 1.5}
          y={rwyY + scaleLength - 15 - 10 - 60}
          href={`#mark1${le_ident}`}
        />
        <use
          x={rwyX}
          y={rwyY + scaleLength - 15 - 10 - 120}
          href={`#mark2${le_ident}`}
        />
        <use
          x={rwyX + scaleWidth / 1.5 - 1}
          y={rwyY + scaleLength - 15 - 10 - 120}
          href={`#mark2${le_ident}`}
        />
        <path
          stroke="#868686"
          strokeDasharray="10"
          strokeWidth={2}
          d={`M ${rwyLineTopX},${rwyLineTopY} L ${rwyLineBottomX},${rwyLineBottomY}`}
        ></path>
      </g>
    </svg>
  );
}
