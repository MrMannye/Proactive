'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { members } from '../constants/index';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] lg:max-h-[350px] sm:max-h-[300px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Aguilera Sanchez Miguel
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Full Stack Developer and UX/UI Designer
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            <div className="flex gap-4">
              <a href="https://twitter.com/Manu76383579">
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/miguel-aguilera-sanchez-233567209/">
                <img
                  src="/linkedin.svg"
                  alt="linkedin"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] max-h-[300px] lg:max-h-[350px] sm:max-h-[300px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Cabrera Vázquez Itzel Berenice
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Blockchain Researcher and Tester
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            <div className="flex gap-4">
              <a href="https://twitter.com/itzeeel_cava">
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/itzel-berenice-cabrera-vazquez-319596265/">
                <img
                  src="/linkedin.svg"
                  alt="linkedin"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] max-h-[300px] lg:max-h-[350px] sm:max-h-[300px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Hernández Rodríguez Isaac Zuriel
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Project Leader and DB Manager
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            <div className="flex gap-4">
              <a href="https://twitter.com/ZurielHR_369">
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/zuriel-hr/">
                <img
                  src="/linkedin.svg"
                  alt="linkedin"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] max-h-[300px] lg:max-h-[350px] sm:max-h-[300px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              León Velasco Francisco Arturo
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Content and Marketing Manager
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            <div className="flex gap-4">
              <a href="https://twitter.com/FrankyJA33">
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/frankyja33/">
                <img
                  src="/linkedin.svg"
                  alt="linkedin"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Feedback;
