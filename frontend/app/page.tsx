"use client";

import Profile from "@/components/Profile";
import PageWrapper from "./page-wrapper";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <PageWrapper>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Profile />{" "}
      </PageWrapper>
    </>
  );
}
