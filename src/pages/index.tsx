import Collection from "@/components/HomePage/Collection";
import HeroSection from "@/components/HomePage/HeroSection";
import NewArrival from "@/components/HomePage/NewArrival";
import Newsletter from "@/components/HomePage/Newsletter";
import TechProduct from "@/components/HomePage/TechProduct";
import Testimonials from "@/components/HomePage/Testimonial";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <NewArrival />
            <Collection />
            <TechProduct />
            <Newsletter />
            <Testimonials />
        </div>
    );
};

export default Home;
