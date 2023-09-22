import {
    icon_main,
    icon_time,
    icon_speed,
    arvr,
    adminicon,
    videoicon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",

    },
    {
      id: "Hiw",
      title: "Maps",
    },
  ];
  
  const services = [
    {
      title: "Be caused by people, new snow and wind.",
      icon: icon_main,
    },
    {
      title: "Move at speeds of 60 to 80 MPH.",
      icon: icon_speed,
    },
    {
      title: "Peak during the period of December through March.",
      icon: icon_time,
    },
  ];

  const education = [
    {
      title: "AR/VR",
      icon: arvr,
    },
    {
      title: "Video Based Learning",
      icon: videoicon,
    },
    {
      title: "Text Based Learning",
      icon : videoicon,
    },
  ];
  const admin = [
    {
      icon: adminicon,
    },
  ];
//  export default {
//     maptiler: {
//         url:
//             "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//         attribution:
//             '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//     },
// };
const maptiler = [{
    url: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Oeh4fYu2Ff7tSrnv4cAO"},
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  ];
  export { services, education, admin, maptiler};