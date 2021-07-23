import { Helmet } from "react-helmet";
import PageLayout from "../components/PageLayout";

const CookiesPolicyPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Cookies policy | Which runway to choose?</title>
      </Helmet>
      <div className="pt-40 px-5 md:px-10 lg:px-20 pb-40 md:pb-60 xl:pb-96 mx-auto max-w-sreen-lg xl:max-w-screen-xl">
        <h1 className="mb-20 block text-4xl sm:text-5xl md:text-6xl font-semibold">
          Cookie Policy for Which runway to choose?
        </h1>

        <p className="mb-6">
          This is the Cookie Policy for Which runway to choose?, accessible from{" "}
          <a href="https://runway.airportdb.io" className="underline">
            https://runway.airportdb.io
          </a>
        </p>

        <p className="mb-3">
          <strong>What Are Cookies</strong>
        </p>

        <p className="mb-6">
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or 'break'
          certain elements of the sites functionality.
        </p>

        <p className="mb-3">
          <strong>How We Use Cookies</strong>
        </p>

        <p className="mb-6">
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <p className="mb-3">
          <strong>Disabling Cookies</strong>
        </p>

        <p className="mb-6">
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies. .
        </p>
        <p className="mb-3">
          <strong>The Cookies We Set</strong>
        </p>

        <ul className="mb-6">
          <li className="mb-4">
            <p className="font-semibold text-sm mb-2">
              Account related cookies
            </p>
            <p>
              If you create an account with us then we will use cookies for the
              management of the signup process and general administration. These
              cookies will usually be deleted when you log out however in some
              cases they may remain afterwards to remember your site preferences
              when logged out.
            </p>
          </li>
          <li>
            <p className="font-semibold text-sm mb-2">Login related cookies</p>
            <p>
              We use cookies when you are logged in so that we can remember this
              fact. This prevents you from having to log in every single time
              you visit a new page. These cookies are typically removed or
              cleared when you log out to ensure that you can only access
              restricted features and areas when logged in.
            </p>
          </li>
        </ul>

        <p className="mb-3">
          <strong>Third Party Cookies</strong>
        </p>

        <p className="mb-2">
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>

        <ul className="mb-6">
          <li>
            <p>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </p>
            <p>
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </p>
          </li>
        </ul>

        <p className="mb-3">
          <strong>More Information</strong>
        </p>

        <p className="mb-6">
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren't sure whether you need
          or not it's usually safer to leave cookies enabled in case it does
          interact with one of the features you use on our site.
        </p>

        <p>
          For more general information on cookies, please read{" "}
          <a
            href="https://www.privacypolicyonline.com/what-are-cookies/"
            className="underline"
          >
            "What Are Cookies"
          </a>
          .
        </p>

        <p className="mb-6">
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods:
        </p>

        <ul className="mb-10">
          <li>
            Email: <a href="mailto:epranka@gmail.com">epranka@gmail.com</a>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default CookiesPolicyPage;
