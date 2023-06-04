import HamburgerIcon from "../assets/Hamburger Menu.svg";

const NavBar = () => {
  return (
    <nav className=" flex mx-auto px-6 py-5 justify-between">
      <div>
        <p className="font-serif text-white">Johnathan Specter</p>
      </div>
      <div>
        <img src={HamburgerIcon} alt="hamburger icon" />
      </div>
    </nav>
  );
};

export default NavBar;
