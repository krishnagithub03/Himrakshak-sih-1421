import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper }  from '../hoc';

const Servicecard =({index,title,icon })=>{
  return(
    <div className="xs:w-[250px] w-full">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-blue-700 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt='{title}' 
          className='w-16 h-16 object-contain'
          />
          <h3
          className='text-white text-[20px] font-bold text-center'
          >{title}</h3>

        </div>
   </div> 
  );
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
       variants = {fadeIn(",",0.1,1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
        An avalanche is a large amount of snow moving quickly down a mountain, typically on slopes of 30 to 45 degrees. When an avalanche stops, the snow becomes solid like concrete and people are unable to dig out. People caught in avalanches can die from suffocation, trauma or hypothermia.
        <br />
Avalanches can:
       </motion.p>

       <div
       className='mt-20 flex flex-wrap gap-10'
       >
        {services.map((service, index)=>(
          <Servicecard key={service.title} index={index}{...service}/>
        ))}

       </div>
       <br />
       <br />
       <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Safety</p>
      <h2 className={styles.sectionHeadText}>Stay Safe During an Avalanche.</h2>
      </motion.div>
       <motion.p
       variants = {fadeIn(",",0.1,1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
       <ul>
        <li className='list-disc'>Use and carry safety equipment and rescue gear.</li>
        <li className='list-disc'>If your partner or others are buried, call (112)NATIONAL EMERGENCY NUMBER and then begin to search if it is safe to do so.</li>
        <li className='list-disc'>If you have the proper training, treat others for suffocation, hypothermia, traumatic injury or shock.</li>
       </ul>
       </motion.p>
    </>
  )
}
export default SectionWrapper(About,"about")