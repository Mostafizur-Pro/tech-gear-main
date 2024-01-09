import Collection from "@/components/HomePage/Collection";
import HeroSection from "@/components/HomePage/HeroSection";
import NewArrival from "@/components/HomePage/NewArrival";
import Newsletter from "@/components/HomePage/Newsletter";
import Testimonials from "@/components/HomePage/Testimonial";
import Product from "@/components/Product/Product";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <NewArrival />
            <Collection />
            <Newsletter />
            <Testimonials />
            <Product />
        </div>
    );
};

export default Home;
