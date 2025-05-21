import { Outlet } from "react-router-dom";
import { checkDefaultTheme } from "../App";
import { useContext, createContext, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";

type UiContextType = {
    isDarkTheme: boolean;
    toggleDarkTheme: () => void;
};

const uiContext = createContext<UiContextType>({
    isDarkTheme: false,
    toggleDarkTheme: () => {},
});

const HomeLayout = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const toggleDarkTheme = () => {
        const newDarkTheme: boolean = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("darkTheme", String(newDarkTheme));
    };

    return (
        <uiContext.Provider value={{
            isDarkTheme,
            toggleDarkTheme
        }}>  
            <Navbar/>
            <Outlet />
            <Footer />
        </uiContext.Provider>
    );
}

export default HomeLayout;

export const useUiContext = () => useContext(uiContext);