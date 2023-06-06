import HamburgerIcon from "../assets/Hamburger Menu.svg";

const NavBar = () => {
  return (
    <nav className="flex p-6 my-5  justify-between">
      <div className="mx-10">
        <p className="font-serif text-white ">Johnathan Specter</p>
      </div>
      <div className="hidden desktop:block text-gray">
        <ul>
          <li className="inline-block px-4">Articles</li>
          <li className="inline-block px-4">Charts</li>
          <li className="inline-block px-4">Articles</li>
          <li className="inline-block px-4">About</li>
        </ul>
      </div>
      <div className="hidden desktop:block">
        <button className="bg-yellow text-black px-4 py-2 mx-10">
          Get in touch
        </button>
      </div>
      <div className="px-6 desktop:hidden">
        <img src={HamburgerIcon} alt="hamburger icon" />
      </div>
    </nav>
  );
};

export default NavBar;
