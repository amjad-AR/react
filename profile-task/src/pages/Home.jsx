import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-center h-screen w-screen flex justify-between items-center">
      <div className="left-div w-[50%] flex justify-center items-center">
        <div className="text-start w-[80%] flex flex-col gap-10">
          <h1 className="text-5xl text-purple-950 font-serif cursor-default">
            Welcom in our wibsite
          </h1>
          <p className=" text-gray-500 text-3xl font-sans cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            molestias, consequatur autem numquam voluptatum unde reiciendis
            ducimus hic dicta quaerat?
          </p>
        </div>
      </div>
      <div className="   w-[50%] flex justify-center items-center">
        <div className="div-img w-[50%] rounded-3xl relative overflow-hidden ">
          <motion.div
            className="absolute top-0 left-[-75%] w-[150%] h-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-[10deg]"
            animate={{ left: ["-75%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <img
            src="hero.jpg"
            alt=""
            className="hero-img rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
