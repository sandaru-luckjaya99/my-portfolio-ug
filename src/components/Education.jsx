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
    className={`flex flex-row p-8 rounded-[20px]
    ${index === educationList.length - 1 ? "mb-0" : "mb-6"} feature-card`}
  >
    <div
      className={`w-[80px] h-[80px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[90%] h-[90%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-6">
      <h4 className="font-poppins font-semibold text-white text-[24px] leading-[36px] mb-1 text-gradient">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[18px] leading-[36px] mb-1 ">
        {degree}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
        {duration}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] mb-1">
        {content1}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] mb-1">
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {educationList.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Education;