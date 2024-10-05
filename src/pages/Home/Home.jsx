import Footer from "../../components/Footer/Footer";
import MissionSection from "../../components/MissionSection/MissionSection";
import HeroSection from "../../components/Navbar/HeroSection/HeroSection";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import SignedSection from "../../components/SignedSection/SignedSection";

const Home = () => {
    return (
        <div className="w-full lg:min-w-[1920px] mx-auto">
            <HeroSection/>
            <ProductsSection/>
            <SignedSection/>
            <MissionSection/>
            <Footer/>
        </div>
    );
};

export default Home;