import clsx from "clsx";
import { Loader2, TriangleAlert } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { DEFAULT_METAR_PROVIDER, METAR_PROVIDER_STORAGE_KEY } from "../consts";
import useAirportFetch from "../hooks/useAirportFetch";
import useStickyState from "../hooks/useStickyState";

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
        <label for="metar-provider" className="block text-sm mb-2">METAR provider</label>
        <select id="metar-provider" value={metarProviderValue} onChange={handleMetarProviderValueChange} className={`block mb-5 bg-white w-full mx-auto uppercase border-2 border-black rounded-md h-14 text-2xl font-semibold text-center
         outline-none placeholder-opacity-0`}>
          <option value="aviationweather">Aviation Weather</option>
          <option value="vatsim">VATSIM</option>
        </select>
        <label for="icao" className="block text-sm mb-2">Enter ICAO</label>
        <div className="relative">
          <input
            id="icao"
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
              {isLoading ? <Loader2 className="animate-spin" /> : error ? <TriangleAlert className="text-red-500" /> : null}
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
