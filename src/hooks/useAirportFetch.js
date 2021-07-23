import axios from "axios";
import { useCallback } from "react";

const MAIN_HUMAN_ERROR_MESSAGE =
  "Sorry, something went wrong. Try again later or contact administrators";

const useAirportFetch = ({ onLoading, onError, onLoaded }) => {
  const fetch = useCallback(
    async (icaoValue) => {
      onLoading && onLoading(true);
      onError(null);
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_HOST + "/api/v1/runway/" + icaoValue
        );
        const data = response.data;
        if (!data) {
          throw new Error("No data received");
        }
        if (data.error) {
          onError(data.error);
          onLoading && onLoading(false);
          return;
        }
        onLoading && onLoading(false);
        onLoaded(data);
      } catch (err) {
        console.error(err);
        onError(MAIN_HUMAN_ERROR_MESSAGE);
        onLoading && onLoading(false);
      }
    },
    [onLoading, onError, onLoaded]
  );

  return fetch;
};

export default useAirportFetch;
