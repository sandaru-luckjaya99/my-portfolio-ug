
import React, { useState, useEffect } from "react";
import { openSourceContributions } from "../constants";
import { motion } from "framer-motion";

const Certificates = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[30px] h-[30px] rounded-full mt-2"
        />
        <div className="flex flex-col ml-4">
          <a
            className="font-poppins font-normal text-[16px] text-teal-200 my-1 leading-[24px] hover:text-white"
            href={props.link}
            target="_blank"
          >
            {props.title}
          </a>
          <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
            {props.organisation}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mt-4">
        <p className="font-poppins font-normal text-[14px] text-dimWhite">
          {props.date}
        </p>
        <a
          className="font-poppins font-normal text-[12px] text-dimWhite inline"
          href={props.link}
          target="_blank"
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
};

const Certificate = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    setContributions(openSourceContributions);
  }, []);

  return (
    <section id="open-source" className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Certificates
      </h1>
      <div className="flex flex-wrap justify-center">
        {contributions.map((contribution, index) => (
          <Certificates key={index} {...contribution} />
        ))}
      </div>
    </section>
  );
};

export default Certificate;
