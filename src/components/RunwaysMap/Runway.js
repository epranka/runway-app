import React from "react";
import RunwayBlock from "./RunwayBlock";
import RunwayIdent from "./RunwayIdent";

export default function Runway(props) {
  const {
    x,
    y,
    width,
    length,
    he_heading,
    le_ident,
    he_ident,
    le_active,
    he_active,
    originAtCenter,
  } = props;

  const scaleWidth = width / 5;
  const scaleLength = length / 10;
  const scaleX = x / 10;
  const scaleY = y / 10;

  const paddingWidth = 40;
  const svgWidth = scaleWidth + paddingWidth * 2;

  const centerX = scaleWidth / 2 + paddingWidth;

  const identPadding = 25;
  const identRectWidth = svgWidth / 1.1;
  const identRectStroke = 2;
  const identYOffset = 28;
  const identX = centerX;
  const identRectHeight = 52;

  const leIdentY = identYOffset;
  const leIdentRectX = identRectStroke * 1.5;
  const leIdentRectY = identRectStroke;
  const leIdentRotation = he_heading > 90 && he_heading < 270 ? 180 : 0;

  const rwyX = paddingWidth;
  const rwyY = leIdentRectY + identRectHeight + identRectStroke + identPadding;

  const rwyLinePadding = 40;
  const rwyLineTopX = centerX;
  const rwyLineTopY = rwyY + rwyLinePadding;
  const rwyLineBottomX = rwyLineTopX;
  const rwyLineBottomY = rwyY + scaleLength - rwyLinePadding;

  const heIdentRectX = identRectStroke * 1.5;
  const heIdentRectY = rwyY + scaleLength + identPadding + identRectStroke;
  const heIdentRotation = he_heading > 90 && he_heading < 270 ? 180 : 0;

  const heIdentY = heIdentRectY + identYOffset - identRectStroke;

  const svgHeight = heIdentRectY + identRectHeight + identRectStroke;

  const originY = rwyY + scaleLength;

  let activeSide = null;
  let isCrosswind = false;
  if (le_active?.headtailwindType === "headwind") {
    activeSide = "le";
    isCrosswind = le_active.status === "crosswind";
  } else if (he_active?.headtailwindType === "headwind") {
    activeSide = "he";
    isCrosswind = he_active.status === "crosswind";
  }

  return (
    <>
      <RunwayBlock
        activeSide={activeSide}
        isCrosswind={isCrosswind}
        le_ident={le_ident}
        he_ident={he_ident}
        scaleX={scaleX}
        scaleY={scaleY}
        he_heading={he_heading}
        originY={originY}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
        rwyX={rwyX}
        rwyY={rwyY}
        scaleWidth={scaleWidth}
        scaleLength={scaleLength}
        rwyLineBottomX={rwyLineBottomX}
        rwyLineBottomY={rwyLineBottomY}
        rwyLineTopX={rwyLineTopX}
        rwyLineTopY={rwyLineTopY}
        originAtCenter={originAtCenter}
      />
      <RunwayIdent
        activeSide={activeSide}
        isCrosswind={isCrosswind}
        scaleX={scaleX}
        scaleY={scaleY}
        originY={originY}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
        he_heading={he_heading}
        leIdentRectX={leIdentRectX}
        leIdentRectY={leIdentRectY}
        identRectWidth={identRectWidth}
        identRectHeight={identRectHeight}
        identRectStroke={identRectStroke}
        leIdentRotation={leIdentRotation}
        identX={identX}
        leIdentY={leIdentY}
        le_ident={le_ident}
        heIdentRectX={heIdentRectX}
        heIdentRectY={heIdentRectY}
        heIdentY={heIdentY}
        heIdentRotation={heIdentRotation}
        he_ident={he_ident}
        originAtCenter={originAtCenter}
      />
    </>
  );
}
