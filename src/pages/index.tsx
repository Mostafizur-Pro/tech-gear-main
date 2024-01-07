import Collection from "@/components/HomePage/Collection";
import HeroSection from "@/components/HomePage/HeroSection";
import Product from "@/components/Product/Product";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Collection />
            <Product></Product>
        </div>
    );
};

export default Home;
