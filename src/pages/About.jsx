import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutWelcome from "../components/about/AboutWelcome";
import AboutHistory from "../components/about/AboutHistory";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutVideo from "../components/about/AboutVideo";

const About = () => {
  useEffect(() => {
    document.title = "Hakkımızda | MotorPage";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <AboutWelcome />
      <AboutHistory />
      <AboutTimeline />
    </motion.div>
  );
};

export default About;
