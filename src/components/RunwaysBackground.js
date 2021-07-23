import React, { useMemo } from "react";
import Runway from "./RunwaysMap/Runway";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default function RunwaysBackground(props) {
  const runways = useMemo(() => {
    const he_heading1 = random(0, 360);
    const he_ident1 = String(Math.round(he_heading1 / 10).toFixed(0));
    const le_ident1 = String(
      Math.round(((he_heading1 + 180) % 360) / 10).toFixed(0)
    );
    const he_heading2 = (he_heading1 + random(45, 135)) % 360;
    const he_ident2 = String(Math.round(he_heading2 / 10).toFixed(0));
    const le_ident2 = String(
      Math.round(((he_heading2 + 180) % 360) / 10).toFixed(0)
    );
    return [
      {
        width: 300,
        length: 10000,
        he_heading: he_heading1,
        le_ident: le_ident1,
        he_ident: he_ident1,
        he_active: {
          headtailwindType: "headwind",
        },
      },
      !props.singleRunway
        ? {
            width: 300,
            length: 10000,
            he_heading: he_heading2,
            le_ident: le_ident2,
            he_ident: he_ident2,
            he_active: {
              headtailwindType: "headwind",
              status: "crosswind",
            },
          }
        : null,
    ].filter(Boolean);
  }, [props.singleRunway]);

  return (
    <div className="fixed inset-0 flex items-center justify-center opacity-5">
      {runways.map((runway, key) => {
        return (
          <Runway
            key={key}
            x={0}
            y={0}
            width={runway.width}
            length={runway.length}
            he_heading={runway.he_heading}
            le_ident={runway.le_ident}
            he_ident={runway.he_ident}
            he_active={runway.he_active}
            originAtCenter
          />
        );
      })}
    </div>
  );
}
