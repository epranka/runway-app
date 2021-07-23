import React from "react";
import RunwaysMap from "../../components/RunwaysMap/RunwaysMap";

export default function AirportRunwaysMap(props) {
  const { airport, activeRunwaysData } = props;

  return (
    <div className="mb-28 md:mb-40">
      <h2 className="mb-6 max-w-lg mx-auto text-4xl font-semibold text-center">
        {airport.icao} Runways Map
      </h2>
      <div className="mb-28 max-w-lg mx-auto text-center text-sm">
        *Runways dimensions and positions are not strictly accurate
      </div>
      <div>
        <RunwaysMap
          runwaysData={airport.runways}
          activeRunwaysData={activeRunwaysData}
        />
      </div>
    </div>
  );
}
