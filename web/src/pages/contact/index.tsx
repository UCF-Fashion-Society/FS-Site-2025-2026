import React from "react";
import Background from "../../components/background"

const Contact: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh] text-black">
            <Background />
            <div className="w-1/3 z-50"> 
                <div className="font-display font-medium text-2xl border-b border-black/20 py-2 text-center">CONTACT US</div>
                <p className="font-baskerville my-2 text-md">
                    
                </p>
            </div>
        </div>
    );
};

export default Contact;