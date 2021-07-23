import React, { useCallback, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAirport } from "../../AirportContext";
import PageLayout from "../../components/PageLayout";
import useAirportFetch from "../../hooks/useAirportFetch";
import useCalculateActiveRunways from "../../hooks/useCalculateActiveRunways";
import AirportHeader from "./AirportHeader";
import AirportRunways from "./AirportRunways";
import AirportRunwaysMap from "./AirportRunwaysMap";
import Compass from "./Compass";
import WindDirectionBackground from "./WindDirectionBackground";

export default function AirportPage(props) {
  const [airport, setAirport] = useAirport();
  const { params } = useRouteMatch();
  const history = useHistory();

  const airportIsValid =
    airport && airport.icao.toLowerCase() === params?.icao.toLowerCase();

  const handleError = useCallback(
    (error) => {
      if (error !== null) {
        history.replace("/", { error, icao: params?.icao });
      }
    },
    [history, params]
  );

  const fetchAirport = useAirportFetch({
    onLoaded: setAirport,
    onError: handleError,
  });

  useEffect(() => {
    if (!airportIsValid) {
      fetchAirport(params?.icao);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeRunwaysData = useCalculateActiveRunways(airport, airportIsValid);

  if (!airportIsValid) return <Loading />;

  return (
    <PageLayout>
      <Helmet>
        <title>
          {airport.name} | {airport.icao} | Which runway to choose?
        </title>
      </Helmet>
      <div className="px-5 relative">
        <div className="relative z-10">
          <AirportHeader airport={airport} />
          <AirportRunways
            airport={airport}
            activeRunwaysData={activeRunwaysData}
          />
          <AirportRunwaysMap
            airport={airport}
            activeRunwaysData={activeRunwaysData}
          />
        </div>
        <WindDirectionBackground windDirection={airport.wind_direction} />
        <Compass />
      </div>
    </PageLayout>
  );
}
