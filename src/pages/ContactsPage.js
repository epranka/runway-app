import { Helmet } from "react-helmet";
import PageLayout from "../components/PageLayout";
import RunwaysBackground from "../components/RunwaysBackground";

const ContactsPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Contacts | Which runway to choose?</title>
      </Helmet>
      <div className="relative z-10 pt-40 lg:pt-72 px-5 md:px-10 lg:px-20 pb-40 md:pb-60 xl:pb-96 c-min-h-screen mx-auto max-w-sreen-lg xl:max-w-screen-xl">
        <h1 className="mb-5 block mx-auto max-w-lg text-3xl lg:text-5xl text-center font-bold">
          Contacts
        </h1>

        <p className="text-center text-sm mb-10">
          Feel free to ask any questions or suggestions
        </p>

        <div className="lg:flex justify-center">
          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">Email</h2>
            <a href="mailto:epranka@gmail.com" target="_blank" rel="noreferrer">
              epranka@gmail.com
            </a>
          </section>

          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">Telegram</h2>
            <a href="https://t.me/epranka" target="_blank" rel="noreferrer">
              t.me/epranka
            </a>
          </section>

          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">Website</h2>
            <a
              href="https://epranka.com"
              title="Edvinas Pranka | Senior Developer"
              target="_blank"
              rel="noreferrer"
            >
              epranka.com
            </a>
          </section>

          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">Linkedin</h2>
            <a
              href="https://www.linkedin.com/in/epranka/"
              target="_blank"
              rel="noreferrer"
            >
              in/epranka
            </a>
          </section>

          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">GitHub</h2>
            <a
              href="https://github.com/epranka/"
              target="_blank"
              rel="noreferrer"
            >
              github/epranka
            </a>
          </section>

          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">Twitter</h2>
            <a
              href="https://twitter.com/epranka"
              target="_blank"
              rel="noreferrer"
            >
              @epranka
            </a>
          </section>
        </div>
      </div>
      <RunwaysBackground singleRunway />
    </PageLayout>
  );
};

export default ContactsPage;
