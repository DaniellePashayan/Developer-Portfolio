import SpenseImg from "../assets/Spense.png";
import YelpCampImg from "../assets/YelpCamp.png";

interface ProjectsProps {
  title: string;
  image: string;
  description: string;
}

const projects: ProjectsProps[] = [
  {
    title: "Spense",
    image: SpenseImg,
    description:
      "Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc",
  },
  {
    title: "YelpCamp",
    image: YelpCampImg,
    description:
      "Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021.",
  },
];

const Projects = () => {
  return (
    <section className="my-5 tablet:m-5 desktop:m-10 grid grid-cols-1 desktop:grid-cols-2">
      {projects.map((item) => (
        <div className="m-4">
          <img
            src={item.image}
            alt={item.title}
            className="my-4 pt-10 w-[100%] "
          />
          <a href="" className="text-[2rem] text-left text-white font-serif">
            {item.title}.com →
          </a>
          <p className="mt-2 font-sans text-gray text-[1.2rem] desktop:text-[1rem]">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
