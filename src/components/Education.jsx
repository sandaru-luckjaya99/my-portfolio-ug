import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index,
}) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card w-full `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="icon"
        className="w-[80%] h-[80%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[24px] leading-[30px] mb-1 text-gradient">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[18px] leading-[30px] mb-1 ">
        {degree}
      </p>
      <p className="font-poppins font-normal text-white text-[18px] leading-[30px] mb-1 ">
        {duration}
      </p>
      <p className="font-poppins font-normal text-white text-[18px] leading-[30px] mb-1 ">
        {content1}
      </p>
      <p className="font-poppins font-normal text-white text-[18px] leading-[30px] mb-1 ">
        {content2}
      </p>
    </div>
  </div>
);
const Education = () => {
  return (
    <section id="education">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Education
      </h1>

      <div className="flex flex-col justify-center">
        {educationList.map((education, index) => (
          <FeatureCard
            key={index}
            icon={education.icon}
            title={education.title}
            degree={education.degree}
            duration={education.duration}
            content1={education.content1}
            content2={education.content2}
          />
        ))}
      </div>      
    </section>
  );
};

export default Education;
