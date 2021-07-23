import React from "react";
import CookiesConsent from "./CookiesConsent/CookiesConsent";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

export default function PageLayout(props) {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      {props.children}
      <Footer />
      <CookiesConsent />
    </>
  );
}
