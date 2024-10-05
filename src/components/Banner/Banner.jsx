import Slider from "../Slider/Slider";


const Banner = () => {
    return (
        <div className='mt-10 md:mt-28 lg:mt-[146px]'>
            <h1 className="uppercase font-actOfRejection text-[#FFFFFF66] text-2xl md:text-[71px] lg:text-[90px] ml-10 lg:ml-[150px]">future looks brights!</h1>

            {/* slider */}
            <Slider/>
        </div>
    );
};

export default Banner;