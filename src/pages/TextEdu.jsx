import React from 'react'
import { SectionWrapper } from '../hoc';
import { styles } from "../styles";
import { Carousel } from './Corousel/Carousel';

const TextEdu = () => {
  return (
    <section
    className='relative w-full h-screen mx-auto'
    >
      <div
      className={`${ styles.paddingX } absolute insert-0 top-[120px] max-w-7xl mx-auto flex dlex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5
        ">
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Get your <span className='text-[#0477FF]'>Training.</span>
          <br />
          and <span className='text-[#0477FF]'>Gear.</span> Knowledge
          </h1>
        </div>

        <div >
            <Carousel/>
        </div>
        {/* <div className={`${styles.sectionSubText} xs:`}>
        </div> */}
        {/* <div className="xs:w-[500px] w-full">
            <ul>
                <li>Always carry an avalanche transceiver, probe and shovel and know how to use them.</li>
                <li>Consider riding with an inflatable avalanche airbag pack.</li>
            </ul>
        </div> */}
      </div>
    </section>
  )
}
export default TextEdu;