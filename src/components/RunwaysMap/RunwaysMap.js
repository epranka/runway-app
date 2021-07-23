import clsx from "clsx";
import React, { useLayoutEffect, useState } from "react";
import { fitRectIntoBounds, latLngToFt } from "../../helpers";
import Runway from "./Runway";

function RunwaysMap(props) {
  const { runwaysData, activeRunwaysData } = props;

  const [state, setState] = useState({
    scale: 1,
    x: 0,
    y: 0,
    cx: 0,
    cy: 0,
    height: undefined,
  });

  useLayoutEffect(() => {
    const $runwaysMap = document.getElementById("runwaysMap");
    const runwaysMapRect = $runwaysMap.getBoundingClientRect();
    const mapWidth = runwaysMapRect.width - 20;
    const mapHeight = window.innerHeight * 0.8;
    const $runwaysContainer = document.getElementById("runwaysContainer");
    const runwaysContainerRect = $runwaysContainer.getBoundingClientRect();
    const $runways = document.querySelectorAll(".runway, .runway-ident");
    const $firstRunway = $runways[0];
    const firstRunwayRect = $firstRunway.getBoundingClientRect();

    let theMostLeft = firstRunwayRect.left;
    let theMostRight = firstRunwayRect.right;
    let theMostTop = firstRunwayRect.top;
    let theMostBottom = firstRunwayRect.bottom;
    for (const $runway of $runways) {
      const rect = $runway.getBoundingClientRect();
      if (rect.left < theMostLeft) theMostLeft = rect.left;
      if (rect.top < theMostTop) theMostTop = rect.top;
      if (rect.right > theMostRight) theMostRight = rect.right;
      if (rect.bottom > theMostBottom) theMostBottom = rect.bottom;
    }

    // compensate scroll
    theMostTop += window.scrollY;
    theMostBottom += window.scrollY;

    const width = theMostRight - theMostLeft;
    const height = theMostBottom - theMostTop;

    const newDimensions = fitRectIntoBounds(
      { width, height },
      { width: mapWidth, height: mapHeight }
    );
    const scaleRatio = newDimensions.width / width;

    const offsetX = runwaysContainerRect.left - theMostLeft - width / 2;
    // const offsetCY = runwaysContainerRect.top - theMostTop - height / 2;
    const offsetY =
      runwaysContainerRect.top + window.scrollY - theMostTop - height / 2;

    setState({
      x: offsetX,
      y: offsetY + newDimensions.height / 2,
      cx: -offsetX,
      cy: -offsetY,
      height: newDimensions.height,
      scale: scaleRatio,
    });
  }, []);

  let runways = runwaysData.map((runway) => {
    const { x, y } = latLngToFt(
      runway.he_latitude_deg,
      runway.he_longitude_deg
    );
    return {
      ...runway,
      x,
      y,
    };
  });

  let xs = runways.map((runway) => runway.x);
  let ys = runways.map((runway) => runway.y);

  let xsd = [0];
  let lastX = xs[0];
  for (let i = 1; i < xs.length; i++) {
    const x = xs[i];
    let d = x - lastX;
    xsd.push(d);
  }

  let ysd = [0];
  let lastY = ys[0];
  for (let i = 1; i < ys.length; i++) {
    const y = ys[i];
    let d = y - lastY;
    ysd.push(d);
  }

  runways = runways.map((runway, index) => {
    return {
      ...runway,
      x: xsd[index],
      y: ysd[index],
      le_active: activeRunwaysData[runway.le_ident],
      he_active: activeRunwaysData[runway.he_ident],
    };
  });

  return (
    <div
      id="runwaysMap"
      className={clsx(
        `relative flex justify-center`,
        state.height ? "items-start" : "items-center"
      )}
      style={{ height: state.height }}
    >
      <div
        style={{
          transform: `translate(${state.x}px, ${state.y}px) scale(${state.scale})`,
          transformOrigin: `${state.cx}px ${state.cy}px`,
        }}
      >
        <div
          id="runwaysContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          {runways.map((runway, index) => {
            return (
              <Runway
                key={index}
                x={runway.x}
                y={runway.y}
                width={runway.width_ft}
                length={runway.length_ft}
                le_active={runway.le_active}
                he_active={runway.he_active}
                le_ident={runway.le_ident}
                he_ident={runway.he_ident}
                he_heading={runway.he_heading_degT}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RunwaysMap;
