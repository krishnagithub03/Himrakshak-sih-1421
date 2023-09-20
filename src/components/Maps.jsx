import React from 'react'
import { SectionWrapper } from '../hoc'; 
let map;
function getMap() {
  const mapKey = import.meta.env.VITE_MAPKEY;
  map = new Microsoft.Maps.Map('.map', {
    credentials: mapKey,
  });
}

const Maps = () => {
  return (
    <div className='map'>
      {getMap()}
    </div>
  )
}

export default SectionWrapper(Maps,"Maps");
