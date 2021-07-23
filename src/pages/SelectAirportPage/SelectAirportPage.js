import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import { useAirport } from "../../AirportContext";
import AirportSelectInput from "../../components/AirportSelectInput";
import PageLayout from "../../components/PageLayout";
import RunwaysBackground from "../../components/RunwaysBackground";
import Compass from "../AirportPage/Compass";

export default function SelectAirportPage() {
  const [, setAirport] = useAirport();
  const history = useHistory();
  const location = useLocation();

  const handleAirportLoaded = useCallback(
    (data) => {
      setAirport(data);
      history.push("/airport/" + data.icao);
    },
    [history, setAirport]
  );

  return (
    <PageLayout>
      <Helmet>
        <title>Which runway to choose?</title>
      </Helmet>
      <div>
        <div className="relative z-10 min-h-screen flex items-center justify-center c-min-h-screen">
          <div className="mb-10 xl:mb-28">
            <div className="flex justify-center opacity-90">
              <img
                src="/logo.png"
                alt="which runway to choose logo"
                className="w-32 md:w-60"
              />
            </div>
            <h1 className="mb-10 lg:mb-14 block text-center text-4xl lg:text-6xl max-w-lg font-bold">
              Which runway to choose?
            </h1>
            <div className="mb-10 px-5">
              <AirportSelectInput
                initialError={location.state?.error}
                initialValue={location.state?.icao}
                onDataLoaded={handleAirportLoaded}
              />
            </div>
            <p className="text-center text-sm">
              &#9733; Check the descent path calculator:{" "}
              <a
                href="https://descent.now.sh"
                target="_blank"
                className="font-semibold"
                rel="noreferrer"
              >
                descent.now.sh
              </a>
            </p>
          </div>
        </div>
      </div>
      <Compass />
      <RunwaysBackground />
    </PageLayout>
  );
}
