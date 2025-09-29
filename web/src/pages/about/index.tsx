import React from "react";
import "./about.css";
import Background from "../../components/background"

const About: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh] text-black">
            <Background />
            <div className="w-1/3 z-50"> 
                <div className="font-display font-medium text-2xl border-b border-black/20 py-2 text-center">OUR MISSION</div>
                <p className="font-baskerville my-2 text-md">
                    The Fashion Society at UCF is a collaborative community
                    dedicated to cultivating creativity and confidence. Through
                    styling, design, production, media, and modeling, we empower
                    students to express themselves, build their portfolios, and
                    connect. Fashion Society at UCF is a creative collective and
                    safe sapce where students of all background come together to
                    express themselves through fashion, art, and culture.
                    whether you dream of working in the fashion industry or
                    simply seek a space to create, connect, and grow — our
                    mission is to nurture individuality, build confidence, and
                    foster authentic community through collaborative experiene
                    like fashion shows, photoshoots, events, and workshops.
                </p>
            </div>
        </div>
    );
};

export default About;
