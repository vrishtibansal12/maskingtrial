"use client";
import style from "./page.module.css";
import useMaskPosition from "../util/useMaskPosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMaskPosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={style.main}>
      <motion.div
        className={style.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          PANTELWAR is one stop solution for all digital financial requirements.
          Call us and we are here!!
        </p>
      </motion.div>
      <div className={style.body}>
        <p>
          Developing end-to-end <span>fintech</span> platforms to make your road
          to success easier and digital
        </p>
      </div>
    </main>
  );
}
