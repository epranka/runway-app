import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import useAirportFetch from "../hooks/useAirportFetch";
import useStickyState from "../hooks/useStickyState";
import {DEFAULT_METAR_PROVIDER, METAR_PROVIDER_STORAGE_KEY} from "../consts";

export default function AirportSelectInput(props) {
  const [metarProviderValue, setMetarProviderValue] = useStickyState(DEFAULT_METAR_PROVIDER, METAR_PROVIDER_STORAGE_KEY);
  const [icaoValue, setIcaoValue] = useState(props.initialValue ?? "");
  const [error, setError] = useState(props.initialError ?? null);
  const [edited, setEdited] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const debouncedIcaoValue = useDebounced(icaoValue, 500);

  const handleIcaoValueChange = useCallback((e) => {
    setError(null);
    setIcaoValue(e.target.value);
    setEdited(true);
  }, []);

  const handleMetarProviderValueChange = useCallback((e) => {
    setMetarProviderValue(e.target.value);
  }, []);

  const fetchData = useAirportFetch({
    onLoading: setLoading,
    onError: setError,
    onLoaded: props.onDataLoaded,
  });

  useEffect(() => {
    if (debouncedIcaoValue) {
      fetchData(metarProviderValue, debouncedIcaoValue);
    } else if (edited) {
      setLoading(false);
      setError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metarProviderValue, debouncedIcaoValue]);

  return (
    <div className="text-center relative">
      <div className="max-w-xs mx-auto relative">
        <p className="text-sm mb-2">METAR provider</p>
        <select value={metarProviderValue} onChange={handleMetarProviderValueChange} className={`block mb-5 bg-white w-full mx-auto uppercase border-2 border-black rounded-md h-14 text-2xl font-semibold text-center
         outline-none placeholder-opacity-0`}>
          <option value="aviationweather">Aviation Weather</option>
          <option value="vatsim">VATSIM</option>
        </select>
        <p className="text-sm mb-2">Enter ICAO</p>
        <div className="relative">
          <input
              value={icaoValue}
              onChange={handleIcaoValueChange}
              type="text"
              className={`block bg-white w-full mx-auto uppercase border-2 border-black rounded-md h-14 text-2xl font-semibold text-center
         outline-none placeholder-opacity-0`}
              placeholder="EGLL"
          />
          {isLoading || error ? (
              <div
                  className={clsx("absolute right-4 top-4 text-gray-300", {
                    "text-red-500": error,
                  })}
              >
                <FontAwesomeIcon
                    icon={[
                      "fas",
                      isLoading
                          ? "circle-notch"
                          : error
                              ? "exclamation-triangle"
                              : null,
                    ]}
                    spin={isLoading}
                />
              </div>
          ) : null}
          {error ? (
              <div className="mt-3 font-semibold text-sm text-red-600 max-w-xs mx-auto">
                {error}
              </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const useDebounced = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
