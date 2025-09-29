import React from "react";
import { motion, useMotionValue, useTime, useTransform } from "framer-motion";
import "./banner.css";
import {circOut} from "motion";

const Banner: React.FC = () => {
    const windowWidth = window.innerWidth;

    const bannerRef1 = React.useRef<HTMLDivElement>(null);
    const bannerRef2 = React.useRef<HTMLDivElement>(null);
    const [bannerWidth, setBannerWidth] = React.useState<number>(0);

    const time = useTime();
    const target = useMotionValue(0);

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const x = useTransform(target, [0, windowWidth], [-500 - windowWidth/2, 500 - windowWidth/2] );

    // React.useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setMousePosition({ x: e.clientX, y: e.clientY });
    //         target.set(e.clientX);
    //     };

    //     window.addEventListener("mousemove", handleMouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, [target]);

    return (
        <div className="background-overlay">
            <img className="background-pic-1" src="gallery/DSC_0336.jpg"></img>
            <img className="background-pic-2" src="gallery/DSC_0396.jpg"></img>

            {/* <motion.div
                ref={bannerRef1}
                className="background-text"
                // style={{ x: x }}
                animate={{

                    transition: {
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 2,
                    },
                }}
            >
                UNIVERSITY OF CENTRAL FLORIDA FASHION SOCIETY
            </motion.div> */}
            <img className="background-text" src="pics/headerwhitebig.png"></img>

            {/* <motion.div ref={bannerRef2} className="background-text" style={{x: move2} } >
                                UNIVERSITY OF CENTRAL FLORIDA FASHION SOCIETY
                                
                            </motion.div> */}
        </div>
    );
};

export default Banner;
