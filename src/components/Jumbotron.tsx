import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

export const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound_section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="ml-auto mr-auto w-full box-border flex items-center flex-col pt-16 relative max-w-5xl z-10 min-h-[831px] h-[calc(100vh - 4rem)] jumbotron_section">
      <h2 className="text-gray-600 text-base font-normal">New</h2>
      <img className="w-32" src={Iphone} alt="iPhone 14 Pro" />
      <p className="inline-block text-transparent mt-4 text-5xl font-semibold mb-4 pt-[0.5px] bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        Big and bigger.
      </p>
      <span className="text-xl font-normal">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="flex justify-center mt-6 items-center ml-0 mr-0 pl-0 list-none">
        <li>
          <button className="bg-blue-600 text-white cursor-pointer inline-block text-center whitespace-no-wrap text-base font-normal min-w-[28px] py-2 px-4 rounded-full">
            Buy
          </button>
        </li>
        <li>
          <a
            className="no-underline text-blue-500 text-xl font-normal cursor-pointer mx-[14px]"
            onClick={handleLearnMore}
          >
            Learn more
          </a>
        </li>
      </ul>
      <img
        className="absolute bottom-0 -mr-[400px] h-[516px]"
        src={HoldingIphone}
        alt="iPhone"
      />
    </div>
  );
};
