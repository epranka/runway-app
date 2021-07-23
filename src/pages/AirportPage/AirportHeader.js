import React from "react";
import spacetime from "spacetime";

export default function AirportHeader(props) {
  const { airport } = props;

  return (
    <div className="relative mb-10 md:mb-20">
      <div className="mt-28 md:mt-60 mx-auto text-center text-xl max-w-lg mb-5">
        {airport.icao}
      </div>
      <h1 className="mb-5 block mx-auto max-w-lg md:text-3xl lg:text-5xl text-center font-bold">
        {airport.name}
      </h1>
      <div className="mb-10 mx-auto max-w-lg font-semibold text-center">
        Last updated:{" "}
        <span className="ml-3 font-mono">
          {spacetime(airport.time).format(
            "{year}-{iso-month}-{date-pad} {hour-24-pad}:{minute-pad}"
          )}{" "}
          UTC
        </span>
      </div>
      <section className="mx-auto max-w-xl mb-10">
        <h2 className="mb-5 block text-center font-semibold">METAR</h2>
        <div className="text-center font-mono">{airport.metar}</div>
      </section>
      <section className="mx-auto max-w-xl">
        <h2 className="mb-5 block text-3xl text-center font-semibold">
          Wind direction
        </h2>
        <div className="text-center text-3xl">
          <span>
            {airport.wind_direction === 0 ? (
              "Variable"
            ) : (
              <span>{airport.wind_direction}&deg;</span>
            )}
          </span>{" "}
          {airport.wind_speed === 0 ? (
            <span>calm winds</span>
          ) : (
            <span>
              <span className="text-lg font-light">at</span>{" "}
              <span>{airport.wind_speed} kts</span>
            </span>
          )}
        </div>
      </section>
    </div>
  );
}
