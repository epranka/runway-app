import { useMemo } from "react";
import { toRad } from "../helpers";

const round = (value) => Math.round(value * 100) / 100;

const useCalculateActiveRunways = (airport, airportIsValid) => {
  const activeRunwaysIdent = useMemo(() => {
    if (!airportIsValid) {
      return null;
    }

    const windDirection = airport.wind_direction;
    const windSpeed = airport.wind_speed;
    // variable wind
    if (windDirection === 'VRB') return {};
    const result = {};
    for (const runway of airport.runways) {
      // Runways heading inverted
      const he_heading = runway.he_heading_degT - 180;
      const le_heading = runway.he_heading_degT;
      const he_headtailwind = round(
        windSpeed * Math.cos(toRad(windDirection - he_heading))
      );
      const he_crosswind = round(
        windSpeed * Math.sin(toRad(windDirection - he_heading))
      );
      const he_crosswind_side = he_crosswind > 0 ? "left" : "right";
      const he_status =
        he_headtailwind > 0
          ? "tailwind"
          : Math.abs(he_crosswind) > Math.abs(he_headtailwind)
          ? "crosswind"
          : "headwind";
      const le_headtailwind = round(
        windSpeed * Math.cos(toRad(windDirection - le_heading))
      );
      const le_crosswind = round(
        windSpeed * Math.sin(toRad(windDirection - le_heading))
      );
      const le_crosswind_side = le_crosswind < 0 ? "right" : "left";
      const le_status =
        le_headtailwind > 0
          ? "tailwind"
          : Math.abs(le_crosswind) > Math.abs(le_headtailwind)
          ? "crosswind"
          : "headwind";

      // DEBUG
      // console.log("------");
      // console.log(runway.le_ident);
      // console.log("Heading", le_heading);
      // console.log("Status", le_status);
      // console.log(
      //   "Headtailwind",
      //   le_headtailwind,
      //   le_headtailwind > 0 ? "tailwind" : "headwind"
      // );
      // console.log("Crosswind", le_crosswind, le_crosswind_side);
      // console.log(runway.he_ident);
      // console.log("Heading", he_heading);
      // console.log("Status", he_status);
      // console.log(
      //   "Headtailwind",
      //   he_headtailwind,
      //   he_headtailwind > 0 ? "tailwind" : "headwind"
      // );
      // console.log("Crosswind", he_crosswind, he_crosswind_side);

      result[runway.le_ident] = {
        status: le_status,
        crosswind: Math.abs(le_crosswind),
        crosswindSide: le_crosswind_side,
        headtailwind: Math.abs(le_headtailwind),
        headtailwindType: le_headtailwind > 0 ? "tailwind" : "headwind",
      };
      result[runway.he_ident] = {
        status: he_status,
        crosswind: Math.abs(he_crosswind),
        crosswindSide: he_crosswind_side,
        headtailwind: Math.abs(he_headtailwind),
        headtailwindType: he_headtailwind > 0 ? "tailwind" : "headwind",
      };
    }
    return result;
  }, [airport, airportIsValid]);

  return activeRunwaysIdent;
};

export default useCalculateActiveRunways;
