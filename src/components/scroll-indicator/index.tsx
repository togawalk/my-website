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
        className="fixed left-0 right-0 top-0 z-50 h-px origin-left bg-lime-500"
      />
    )
  );
};
