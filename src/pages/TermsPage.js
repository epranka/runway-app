import { Helmet } from "react-helmet";
import PageLayout from "../components/PageLayout";
import React from 'react';

const TermsPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Terms of usage | Which runway to choose?</title>
      </Helmet>
      <div className="pt-60 px-5 md:px-10 lg:px-20 pb-40 md:pb-60 xl:pb-96 c-min-h-screen mx-auto max-w-sreen-lg xl:max-w-screen-xl">
        <h1 className="mb-20 block text-4xl sm:text-5xl md:text-6xl font-semibold">
          Terms of usage Which runway to choose?
        </h1>

        <p className="mb-6">
          This is the Terms of usage for Which runway to choose?, accessible from{" "}
          <a href="https://runway.airportdb.io" className="underline">
            https://runway.airportdb.io
          </a>
        </p>

        <p className="mb-3">
          <strong>Responsibility</strong>
        </p>

        <p className="mb-6">
          This application only calculates runway suggestion by wind. You must
          always listen to ATC for active runways, check that runways data is
          really valid or/and read NOTAM's.{" "}
          <strong>Use data at your own risk</strong>. Application calculates
          runway suggestion with no warranty of any kind. By using the provided
          data and suggestions, you agree that website/application creators,
          maintainers, and anyone involved with the website/application hold{" "}
          <strong>no liability</strong> for anything that happens when you use
          the data and suggestions
        </p>
      </div>
    </PageLayout>
  );
};

export default TermsPage;
