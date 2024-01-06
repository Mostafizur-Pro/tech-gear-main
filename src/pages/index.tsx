import Collection from "@/components/HomePage/Collection";
import Sidebar from "@/components/HomePage/Sliderbar";
import Product from "@/components/Product/Product";

const Home = () => {
    return (
        <div>
            <Sidebar />
            <Collection />
            <Product></Product>
        </div>
    );
};

export default Home;
