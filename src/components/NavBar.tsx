import HamburgerIcon from "../assets/Hamburger Menu.svg";

const NavBar = () => {
  return (
    <nav className=" flex w-[100%] px-6 my-5 py-5 justify-between">
      <div className="tablet:ml-10">
        <p className="font-serif text-white ">Johnathan Specter</p>
      </div>
      <div className="hidden tablet:block text-gray">
        <ul>
          <li className="inline-block px-4">Articles</li>
          <li className="inline-block px-4">Charts</li>
          <li className="inline-block px-4">Articles</li>
          <li className="inline-block px-4">About</li>
        </ul>
      </div>
      <div className="hidden tablet:block">
        <button className="bg-yellow text-black px-4 py-2 ">
          Get in touch
        </button>
      </div>
      <div className="desktop:hidden">
        <img src={HamburgerIcon} alt="hamburger icon" />
      </div>
    </nav>
  );
};

export default NavBar;
