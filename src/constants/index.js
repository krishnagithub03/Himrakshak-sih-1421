import {
    icon_main,
    icon_time,
    icon_speed,
    arvr,
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
      title: "How it Works?",
    },
    {
      id : "admin",
      title: "Admin"
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
  export { services, education};