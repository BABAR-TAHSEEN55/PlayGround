import { motion } from "framer-motion";
import { line } from "framer-motion/client";
interface FloatingProps {
  color: string;
  left: string;
  top: string;
  size: string;
  delay?: number;
}
const FloatingCircle = ({ color, left, top, size, delay }: FloatingProps) => {
  return (
    <motion.div
      animate={{
        y: ["0", "100%", "0"],
        x: ["0", "100%", "0"],
        rotate: [0, 350],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay: delay,
      }}
      className={`absolute rounded-full blur  opacity-30 ${color} ${size}`}
      style={{ top, left }}
    ></motion.div>
  );
};

export default FloatingCircle;
