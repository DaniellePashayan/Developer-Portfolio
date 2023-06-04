// import logos
import JPMorgan from "../assets/Logos/JP Morgan.svg";
import Samsung from "../assets/Logos/Samsung.svg";
import Tinder from "../assets/Logos/Tinder.svg";
import Verizon from "../assets/Logos/Verizon.svg";
import Visa from "../assets/Logos/Visa.svg";
import Walmart from "../assets/Logos/Walmart.svg";

const Companies = () => {
  return (
    <section className="flex justify-center py-10 ">
      <div className="grid grid-cols-2 justify-items-center w-[70%]">
        <img src={Walmart} alt="Walmart" className="py-2" />
        <img src={JPMorgan} alt="JP Morgan" className="py-2" />
        <img src={Visa} alt="Visa" className="py-2" />
        <img src={Tinder} alt="Tinder" className="py-2" />
        <img src={Samsung} alt="Samsung" className="py-2" />
        <img src={Verizon} alt="Verizon" className="py-2" />
      </div>
    </section>
  );
};

export default Companies;
