import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: `url(${banner})`
        
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-center">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [30, 10, 30] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <h1 className="mb-5 text-6xl font-extrabold text-[#E0F7FA] drop-shadow-lg">
              Brighten Your Smile Today
            </h1>
            <p className="mb-5 text-lg text-[#B2EBF2] px-4 md:px-0">
              Welcome to <span className="text-[#4DD0E1] font-semibold">SmileCare Dental Clinic</span> — where your comfort and dental health come first. 
              Get expert care, advanced treatments, and a smile you'll love.
            </p>
            <motion.button
              className="btn text-white bg-[#00BCD4] border-none hover:bg-[#00ACC1] text-lg font-semibold px-6 py-3 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
