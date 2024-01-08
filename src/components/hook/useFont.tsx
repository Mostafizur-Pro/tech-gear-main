// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";
// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});

const useFont = () => {
    return bodoniModa;
};

export default useFont;
