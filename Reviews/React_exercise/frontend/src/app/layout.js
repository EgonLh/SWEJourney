import {Inter} from "next/font/google";
import "./globals.css";

import Navigation from "../components/Navigation";
import Home from "../components/Home";



const inter = Inter({subsets: ["latin"]});
export const metadata = {
    title: "UI Practice",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {

    return <html>
    <body>
    <Navigation/>
    <Home/>
    </body>
    </html>;
}
