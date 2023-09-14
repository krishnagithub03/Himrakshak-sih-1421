import React from "react";
import { styles } from '../styles';
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

const Hiw = () =>{
    return(
          <>
        <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Working</p>
      <h2 className={styles.sectionHeadText}>How it Works?</h2>
      </motion.div>
      <motion.p
       variants = {fadeIn(",",0.1,1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
       Get started on your avalanche education. If you want to ride safely in the
backcountry you need to Get the Forecast, Get the Gear, and Get the Training.
       </motion.p>
        </>
    );
}
export default SectionWrapper(Hiw,"Hiw");