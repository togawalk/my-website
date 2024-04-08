"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    bounce: 0,
  });

  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const contentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (contentHeight > viewportHeight) {
      setShowScrollIndicator(true);
    } else {
      setShowScrollIndicator(false);
    }
  }, []);

  return (
    showScrollIndicator && (
      <motion.div
        style={{ scaleX: scaleX }}
        className="z-50 bg-lime-500 fixed top-0 left-0 right-0 h-px origin-left"
      />
    )
  );
};
