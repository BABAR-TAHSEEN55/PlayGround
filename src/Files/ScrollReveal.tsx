import { useScroll } from "framer-motion";
import { useRef } from "react";

import { motion } from "framer-motion";
//TODO: complete 2 more animations
const ScrollReveal = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"], //why start start ?
  });
  //   useEffect(() => {
  //     scrollYProgress.on("change", (e) => console.log(e));
  //   }, []);
  return (
    <div>
      <div style={{ height: "100vh" }}></div>
      <motion.div
        ref={element}
        style={{ opacity: scrollYProgress }} // Here scrollYprogress takes Motion value so opacity with style without motion.div won't work
        className="text-white text-2xl max-w-lg font-mono p-4 font-bold"
      >
        {value}
      </motion.div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default ScrollReveal;
