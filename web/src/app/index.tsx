import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Navigation from "../components/navigation/navigation";
import Shows from "../pages/shows/index";
import DamePunkShow from "../pages/gallery/damepunk-2324/index";
import Contact from "../pages/contact/index"
import React from "react";

// Eventually make the navigation a stylable component for loading

const App: React.FC = () => {
    const [isHome, setIsHome] = React.useState<boolean>(true);

    return (
        <BrowserRouter>
            {/* Eventually just pass the ishome function to the pages */}
            {/* <Navigation {...{isHome: isHome}}/> */}

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navigation isHome={true} />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <Navigation isHome={false} />
                            <About />
                        </>
                    }
                />
                <Route
                    path="/shows"
                    element={
                        <>
                            <Navigation isHome={false} />
                            <DamePunkShow />
                        </>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <>
                            <Navigation isHome={false} />
                            <Contact />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
