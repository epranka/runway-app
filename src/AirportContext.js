import React, { useContext, useMemo, useState } from "react";

const AirportContext = React.createContext([null, () => {}]);

const AirportContextProvider = ({ children }) => {
  const [airport, setAirport] = useState(null);

  const contextValue = useMemo(() => {
    return [airport, setAirport];
  }, [airport]);

  return (
    <AirportContext.Provider value={contextValue}>
      {children}
    </AirportContext.Provider>
  );
};

export default AirportContextProvider;

export const useAirport = () => {
  return useContext(AirportContext);
};
