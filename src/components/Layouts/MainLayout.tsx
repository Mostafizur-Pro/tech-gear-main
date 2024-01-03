import React, { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

type MainLayoutProps = {
    children: ReactNode;
};
// // Import Open Sans font
// import { Bodoni_Moda } from "next/font/google";
// // Configure font object
// const bodoniModa = Bodoni_Moda({
//     subsets: ["latin"],
//     display: "swap",
// });

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        // className={bodoniModa.className}
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
