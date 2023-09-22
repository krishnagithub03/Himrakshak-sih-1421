import React, { useRef, useState } from "react";
import { styles } from '../styles';
import { fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { MapContainer, TileLayer } from 'react-leaflet';
import {maptiler} from "../constants";
import "leaflet/dist/leaflet.css"

const Hiw = () =>{
  const [center, setCenter] = useState({lat : 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
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
       Integrating Bing Maps allows us to visualize and track the current and historical trends of avalanches using location data. By overlaying avalanche incident points on the map, we can provide real-time information on areas prone to avalanches. Users can explore historical data to identify patterns, risk zones, and track changes over time. This integration not only enhances safety by providing timely warnings but also aids researchers and authorities in making informed decisions for avalanche mitigation and prevention strategies. It combines geographical context with vital data, improving our understanding of avalanche behavior and facilitating more effective disaster management.
       </motion.p>
       <br />
       <br />
       <div >
       {/* <MapContainer
       center = {center}
       zooom={ZOOM_LEVEL}
       ref={mapRef}
       >
       <TileLayer 
       url={maptiler.url} attribution={maptiler.attribution} />
       </MapContainer> */}
        <MapContainer center={[28.7532519654689, 77.49720130246835]} zoom={16}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
       </div>
        </>
    );
}
export default SectionWrapper(Hiw,"Hiw");