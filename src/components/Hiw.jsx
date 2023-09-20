import React from "react";
import { styles } from '../styles';
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

const Hiw = () =>{
    return(
          <>
        <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Working with</p>
      <h2 className={styles.sectionHeadText}>Maps.</h2>
      </motion.div>
      <motion.p
       variants = {fadeIn(",",0.1,1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
       Integration of Bing maps to get display the current and past trends of Avalanches using location points.
       </motion.p>
        </>
    );
}
export default SectionWrapper(Hiw,"Hiw");