import React from "react";
import "./navigation.css";

import { useNavigate } from "react-router-dom";
import { useScroll, useMotionValueEvent } from "motion/react";

interface NavigationProps {
    isHome: boolean;
}

const Navigation: React.FC<NavigationProps> = (props) => {
    const { isHome } = props;

    const navigate = useNavigate();

    const { scrollY } = useScroll();
    const [shown, setShown] = React.useState(1);
    const nav : React.Ref<HTMLDivElement> | null = React.useRef(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 100) {
            setShown(0);
        } else {
            setShown(1);
        }
    });

    React.useEffect(() => {
        if (nav.current) {
            if (shown == 0) nav.current.style.opacity = "0"
            else nav.current.style.opacity = "1"
        }
    }, [shown])

    return (
        <div ref={nav} className="flex justify-left align-center fixed w-full z-10 mt-0 top-0 left-0 transition-all duration-500">
            {/*  */}

            <div className="flex w-full justify-left align-center p-8">

                {!isHome && <a className="font-baskerville font-bold text-sm mx-8" href="/">
                        <div className=" font-display text-2xl font-bold border-b border-black/20">
                            F A S H I O N&nbsp;&nbsp; S O C I E T Y
                        </div>
                        <div className=" font-display text-xs font-light pt-1">
                            University of Central Florida
                        </div>
                </a>}

                <div className="nav-links font-baskerville font-bold text-sm">
                    <a
                        href="/shows"
                        className=" mx-[36px]"

                    >
                        <p className="border-b border-black/20 hover:border-black">S H O W S</p>
                    </a>

                    <a
                        href="/shoots"
                        className=" mx-[36px]"
                    >
                        <p className="border-b border-black/20 hover:border-black">S H O O T S</p>
                    </a>

                    <a
                        href="/about"
                        className=" mx-[36px]"
                    >
                        <p className="border-b border-black/20 hover:border-black">A B O U T</p>
                    </a>

                    <a
                        href="/contact"
                        className=" mx-[36px]"
                    >
                        <p className="border-b border-black/20 hover:border-black">C O N T A C T</p>
                    </a>
                </div>
            </div>

            {/*  */}

            {/* <div className="nav-links">
        
        
       
        
      </div> */}
        </div>
    );
};

export default Navigation;
