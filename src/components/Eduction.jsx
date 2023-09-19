import React, { useState } from "react";
import { Link, Route,Routes, useNavigate } from "react-router-dom";
import { education, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from '../utils/motion';

var isClicked = false;

const Servicecard =({index,title, icon})=>{
  const[Clicked,setClicked] = useState(false);

  const navigate = useNavigate();

  const navigateToAdmin = () =>{
    navigate("/text");
  };

  const handleCardClick=()=>{
    navigateToAdmin();
    setClicked(!Clicked);
  }
  return(
    <div className="xs:w-[250px] w-full" onClick={handleCardClick}>
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

const Education = () =>{
    return(
        <>
        <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Tutorials</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <motion.p
       variants = {fadeIn(",",0.1,1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
       Get started on your avalanche education. If you want to ride safely in the
backcountry you need to Get the Forecast, Get the Gear, and Get the Training.
       </motion.p>
        <div
       className='mt-20 flex flex-wrap gap-10'
       >
        {education.map((edu, index)=>(
          <Servicecard key={edu.title} index={index}{...edu}/>
        ))}
        </div>
        </>
    );
}

export default SectionWrapper(Education,"education")