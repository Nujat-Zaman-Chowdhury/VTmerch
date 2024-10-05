import book1 from "../../../public/img/Choose-Your-Enemies (2).png";
import book2 from "../../../public/img/img (8).png";
import signature from "../../../public/img/pat-signature White 1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SignedSection = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      AOS.init({ duration: 1000 });
  } else {
      AOS.init({ disable: true });
  }
  }, []);
  return (
    <div className="bg-black  font-montserrat">
      <div className="md:pl-10 lg:pl-[121px] pb-10 lg:pb-[120px]">
       <div className="flex flex-col lg:flex-row gap-6 lg:gap-[85px]">
         {/* left part */}
         <div className="pt-8 md:pt-[133px] flex-1"
         data-aos="fade-right"
         >
          <div className="ml-[39px]">
          <h4 className="text-white text-2xl mb-3 md:mb-0  md:text-[39px] font-medium uppercase">
            Patrick Bet-David&apos;s
          </h4>
          <h3 className="text-gradient uppercase md:text-[65px] lg:text-[70px] font-bold mb-2 lg:mb-[48px]">
            Signed <br />
            Collection
          </h3>
          <button className="uppercase flex items-center gap-3 px-3 md:px-8 py-2 md:py-4 rounded-[12px] font-inter text-black font-medium bg-white hover:shadow-sm hover:shadow-white">
            Shop now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.9222 9.41089L13.0888 3.57755C12.9317 3.42576 12.7212 3.34176 12.5027 3.34366C12.2842 3.34556 12.0752 3.4332 11.9207 3.58771C11.7662 3.74221 11.6785 3.95122 11.6766 4.16972C11.6747 4.38822 11.7587 4.59872 11.9105 4.75589L16.3213 9.16672H1.66634C1.44533 9.16672 1.23337 9.25452 1.07709 9.4108C0.920805 9.56708 0.833008 9.77904 0.833008 10.0001C0.833008 10.2211 0.920805 10.433 1.07709 10.5893C1.23337 10.7456 1.44533 10.8334 1.66634 10.8334H16.3213L11.9105 15.2442C11.8309 15.3211 11.7674 15.413 11.7238 15.5147C11.6801 15.6164 11.6571 15.7257 11.6561 15.8364C11.6552 15.947 11.6763 16.0568 11.7182 16.1592C11.7601 16.2616 11.8219 16.3546 11.9002 16.4329C11.9784 16.5111 12.0715 16.573 12.1739 16.6149C12.2763 16.6568 12.386 16.6779 12.4967 16.6769C12.6073 16.676 12.7167 16.653 12.8183 16.6093C12.92 16.5656 13.012 16.5021 13.0888 16.4226L18.9222 10.5892C19.0784 10.4329 19.1662 10.221 19.1662 10.0001C19.1662 9.77908 19.0784 9.56716 18.9222 9.41089Z"
                fill="black"
              />
            </svg>
          </button>
          </div>
          <img src={signature} className="" alt="patt signature" />
        </div>

        {/* right part */}
        <div className="flex flex-col md:flex-row gap-6 items-center lg:pt-[101px]"
        data-aos="fade-left"
        >
          <img
            src={book1}
            className="w-[240px] md:w-[316px] lg:w-[370px] lg:h-[588px] object-cover"
            alt="book1"
          />
          <img
            src={book2}
            className="w-[250px] md:w-[380px] lg:w-[404px] lg:h-[518px] object-cover"
            alt="book2"
          />
        </div>
       </div>

       
      </div>
    </div>
  );
};

export default SignedSection;
