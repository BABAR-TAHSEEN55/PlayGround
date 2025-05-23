import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Loco = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      // Optional: destroy locomotive-scroll when component unmounts
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loco;
