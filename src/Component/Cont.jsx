import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Cont() {
  const [countup, setCountup] = useState(false);

  useEffect(() => {
    setCountup(true); // Trigger count-up when the component mounts
  }, []);

  return (
    <div className="flex justify-center">
      <ScrollTrigger
        onEnter={() => setCountup(true)}
        onExit={() => setCountup(false)}
      >
        <div className="   py-3   flex space-x-8 ">
          <div className="text-blue-900 font-semibold text-2xl text-center">
            <span>Client</span>
            {countup && (
              <h1 className="text-6xl">
                <CountUp start={0} end={1000} duration={5} delay={0} />
              </h1>
            )}
          </div>
          <div className="text-blue-700 font-semibold text-2xl text-center">
            <span>Position</span>
            {countup && (
              <h1 className="text-6xl">
                <CountUp start={0} end={500} duration={5} delay={0} />
              </h1>
            )}
          </div>
          <div className="font-semibold text-2xl text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 bg-clip-text text-transparent">
            <span>Project</span>
            {countup && (
              <h1 className="text-6xl">
                <CountUp start={0} end={700} duration={25} delay={0} />
              </h1>
            )}
          </div>

        </div>
      </ScrollTrigger>
    </div>
  );
}
