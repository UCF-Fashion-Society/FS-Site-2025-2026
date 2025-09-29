import React from "react";
import "./home.css";
import Navigation from "../../components/navigation/navigation";

import Banner from "../../components/banner/index";
import Background from "../../components/background";

const Home: React.FC = () => {
    const imgRef = React.useRef<HTMLImageElement>(null);
    const logoRef = React.useRef<HTMLImageElement>(null);
    const [imgWidth, setImgWidth] = React.useState<number>(0);

	const handleResize = () => {
		if (imgRef.current) {
			setImgWidth(imgRef.current.clientWidth);
		}
	};

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // React.useEffect(() => {
    //     if (imgRef.current && logoRef.current && imgWidth > 0) {
    //         logoRef.current.style.width = `${imgWidth}px`;
    //     }
    // }, [imgWidth]);

    return (
        <>
            <div className="flex justify-center align-center w-[100%] h-[100vh] font-baskerville">

                <Background />

                {/* Non Threejs Back */}
                <div className="absolute w-full h-full">
                    <div className="w-full h-1/2 border-b black opacity-15">
                        
                    </div>
                </div>

                {/* Fashion Society Logo */}
                <img className="fs-logo" src="gallery/Logo.png"></img>


                {/* Main Content, actually relative */}
                <div className="flex flex-col ">


                    {/* <div ref={logoRef} className=" w-fit h-fit m-auto z-2">
                        <div className=" font-baskerville text-3xl font-medium">
                            U C F &nbsp;&nbsp; F A S H I O N &nbsp;&nbsp; S O C I E T Y
                        </div>
                    </div> */}
                        
                   <div ref={logoRef} className=" w-fit h-fit m-auto z-2">
                        <div className=" font-display text-md font-medium opacity-0">
                            University of Central Florida
                        </div>
                        <div className=" font-display text-5xl font-bold">
                            F A S H I O N&nbsp;&nbsp; S O C I E T Y
                        </div>
                        <div className=" font-display text-md font-light">
                            University of Central Florida
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default Home;
