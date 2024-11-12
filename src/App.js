import React from "react";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AirportContextProvider from "./AirportContext";
import ScrollManagement from "./components/ScrollManagement";
import AirportPage from "./pages/AirportPage/AirportPage";
import ContactsPage from "./pages/ContactsPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import SelectAirportPage from "./pages/SelectAirportPage/SelectAirportPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <AirportContextProvider>
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_APP_GA_ID}`}
        ></script>
      </Helmet>
      <ScrollManagement>
        <Router>
          <Route path="/" exact component={SelectAirportPage} />
          <Route path="/airport/:icao" exact component={AirportPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/policy/cookies" component={CookiesPolicyPage} />
          <Route path="/policy/terms-of-usage" component={TermsPage} />
        </Router>
      </ScrollManagement>
    </AirportContextProvider>
  );
}

export default App;
