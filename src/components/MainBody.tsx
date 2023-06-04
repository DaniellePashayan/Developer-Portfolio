// import logos
import JPMorgan from "../assets/Logos/JP Morgan.svg";
import Samsung from "../assets/Logos/Samsung.svg";
import Tinder from "../assets/Logos/Tinder.svg";
import Verizon from "../assets/Logos/Verizon.svg";
import Visa from "../assets/Logos/Visa.svg";
import Walmart from "../assets/Logos/Walmart.svg";

// import images
import Spense from "../assets/Spense.png";
import YelpCamp from "../assets/YelpCamp.png";

const MainBody = () => {
  return (
    <main className="my-5">
      <header className="text-left p-5 tablet:p-7">
        <h2 className="text-[2rem] tablet:text-[3.5rem] tablet:leading-[4rem] text-white font-serif">
          Helping companies build better, scalable software.
        </h2>
        <p className="text-gray font-sans tablet:text-[1.2rem]">
          Award-winning web developer and author, with over 15+ years of working
          experience with fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </header>
      <section className="flex flex-wrap my-8 justify-center w-[75%] tablet:w-[80%] mx-auto">
        <img
          src={Walmart}
          alt="Walmart"
          className="py-2 px-2 tablet:px-10 h-9 tablet:h-10"
        />
        <img
          src={JPMorgan}
          alt="JP Morgan"
          className="py-2 px-2 tablet:px-10 h-9 tablet:h-10"
        />
        <img
          src={Visa}
          alt="Visa"
          className="py-2 px-2 tablet:px-10 h-9 tablet:h-11=0"
        />
        <img
          src={Tinder}
          alt="Tinder"
          className="py-2 px-2 tablet:px-10 h-9 tablet:h-10"
        />
        <img
          src={Samsung}
          alt="Samsung"
          className="py-2 px-2 tablet:px-10 h-9 tablet:h-10"
        />
        <img
          src={Verizon}
          alt="Verizon"
          className="py-2 px-2 tablet:px-10 h-9 tablet:h-10"
        />
      </section>

      <section className="my-10">
        <div className="m-4">
          <img src={Spense} alt="Spense" className="my-4 w-[100%]" />
          <a
            href=""
            className="text-[1.8rem] tablet:text-[2rem] text-left text-white font-serif"
          >
            Spense.com →
          </a>
          <p className="mt-2font-sans text-gray text-[1rem] tablet:text-[1.2rem]">
            Rethinking the way writers get paid, an open-source platform
            designed to help writers focus more on writing, and less on
            <em> when</em> and
            <em> how</em> they'll get paid. Project in collaboration with
            Codewell.cc
          </p>
        </div>
      </section>

      <section className="my-10">
        <div className="m-4 ">
          <img src={YelpCamp} alt="YelpCamp" className="my-4 w-[100%]" />
          <a
            href=""
            className="text-[1.8rem] tablet:text-[2rem] text-left text-white font-serif"
          >
            YelpCamp.com →
          </a>
          <p className="mt-2 font-sans text-gray text-[1rem] tablet:text-[1.2rem]">
            Allowing backpack travelers to perfectly plan their trip through an
            open-source platform similar to TripAdvisor. With over 1m MAU,
            YelpCamp has been the crowd's favorite in 2021.
          </p>
        </div>
      </section>

      <section className="mt-10 py-10 px-5 bg-dark-gray mx-auto">
        <h1 className="text-white font-serif text-[1.9rem] tablet:text-[2.4rem]">
          A co-founder at one of the world's largest communities.
        </h1>
        <p className="font-sans text-gray text-[1rem] tablet:text-[1.2rem]">
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
        <p className="font-sans text-gray text-[1rem] tablet:text-[1.2rem]">
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

      <section className="pt-10 pb-5 px-5 mx-auto bg-black tablet:w-[80%]">
        <h1 className="text-white font-serif text-[1.9rem] tablet:text-[2.3rem]">
          Interested in working with me?
        </h1>
        <p className="font-sans text-gray text-[1rem] tablet:text-[1.2rem] pb-2">
          I'm active on all social media platforms listed below, but you can
          also send me an email and I will get back to you within 24-48 hours.
        </p>
        <button className="bg-yellow px-6 py-3 font-serif">Get in touch</button>
      </section>
    </main>
  );
};

export default MainBody;
