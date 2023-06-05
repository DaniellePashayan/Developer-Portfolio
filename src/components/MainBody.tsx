import Companies from "./Companies";
import Projects from "./Projects";

const MainBody = () => {
  return (
    <main className="my-5">
      <header className="text-left p-5 mobile:p-9">
        <h2 className="text-[2.25rem] text-white font-serif">
          Helping companies build better, scalable software.
        </h2>
        <p className="text-gray font-sans text-[1.2rem] mobile:text-[1.5rem]">
          Award-winning web developer and author, with over 15+ years of working
          experience with fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </header>

      <Companies />

      <Projects />

      <section className="mt-10 py-10 px-5 bg-dark-gray mx-auto">
        <h1 className="text-white font-serif text-[2.25rem]">
          A co-founder at one of the world's largest communities.
        </h1>
        <p className="mt-2 font-sans text-gray text-[1.2rem] mobile:text-[1.5rem]">
          The combined experience I have working at the top Fortune 500
          companies has allowed me to develop a skillset that helps me in not
          just development, but in every aspect of any business.
          <br />
          <br />
          I'm proud to announce that I am not working at one of the world's
          largest communities teaching young minds about how to <em>
            {" "}
            sell{" "}
          </em>{" "}
          yourself as a developer and open them to a whole new world of
          opportunities.
        </p>
      </section>

      <section className="pt-5 pb-11 px-5 bg-dark-gray mx-auto">
        <p className="mt-2 font-sans text-gray text-[1.2rem]">
          As a developer, you have everything available to you and all that's
          holding you back is yourself.
          <br />
          <br />
          A quote I live by perfectly illustrates what I mean.
          <br />
          <br />
          "How big would you dream, if you <b>knew</b> you wouldn't fail?"
          You've already gone through the hardest parts being a developer, it's
          time to elevate your skills and become a leader in something you're
          passionate about.
          <br />
          <br />
          I'm happy to chat over coffee some time about how I can help your
          company.
        </p>
      </section>

      <section className="pt-10 pb-5 px-5 mx-auto bg-black mobile:w-[80%]">
        <h1 className="text-white font-serif text-[2.15rem]">
          Interested in working with me?
        </h1>
        <p className="mt-2 font-sans text-gray text-[1.2rem]">
          I'm active on all social media platforms listed below, but you can
          also send me an email and I will get back to you within 24-48 hours.
        </p>
        <button className="bg-yellow my-5 px-6 py-3 font-serif">Get in touch</button>
      </section>
    </main>
  );
};

export default MainBody;
