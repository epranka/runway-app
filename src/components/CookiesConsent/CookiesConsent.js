import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useCookiesConsent from "./useCookiesConsent";

const CookiesConsent = () => {
  const [cookiesConsent, setCookiesConsent] = useCookiesConsent();

  const handleConsent = useCallback(() => {
    setCookiesConsent();
  }, [setCookiesConsent]);

  useEffect(() => {
    if (cookiesConsent && import.meta.env.NODE_ENV === "production") {
      // Start using Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", import.meta.env.REACT_APP_GA_ID);
    }
  }, [cookiesConsent]);

  if (cookiesConsent) return null;

  return (
    <div
      id="cookiesConsent"
      className="fixed bg-white border border-gray-600 p-5 z-10 right-1 bottom-1 max-w-md text-sm"
    >
      <p>
        This website use cookies to analyze traffic. Also cookies are used for
        authentication state. If you don't agree with that you should stop using
        this website.
      </p>
      <div className="my-5 font-semibold">
        <Link to="/policy/cookies">Learn more</Link>
      </div>
      <div className="mb-2 border border-gray-500 text-lg rounded-md font-bold inline py-1 px-3 cursor-pointer">
        <span onClick={handleConsent}>Ok, I got it</span>
      </div>
    </div>
  );
};

export default CookiesConsent;
