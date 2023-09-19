import React, { useState } from "react";
import { airbag,shovel,beacon,probe , arrowBack, arrowForward, radioButton} from "../../assets";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Airbag Pack",
      description:
        "An inflatable avalanche airbag pack, when properly deployed, can increase your chances of staying near the surface of an avalanche.",
      icon: airbag,
    },
    {
      title: "Transceiver",
      description:
        "Avalanche transceivers transmit and receive a signal that can be used to locate someone buried under snow. ",
      icon: beacon,
    },
    {
      title: "Shovel",
      description:
        "The average avalanche burial is 4 feet and avalanche debris can be hard and dense. A sturdy avalanche shovel is essential.",
      icon: shovel,
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <section className="relative w-full h-screen mx-auto"
    >
    <div className="carousel rounded-xl bg-blue-700 xs:w-[700px] w-full">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        > 
        <img src={arrowBack} alt="" />
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  <img src={radioButton} alt="" />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
        <img src={arrowForward} alt=""
        />
        </button>
      </div>
    </div>
    <div className="mx-16 py-10">
      <ul className="list-outside list-disc ml-6">
          <li>Always carry an avalanche transceiver, probe and shovel and know how to use them.</li>
          <li>Consider riding with an inflatable avalanche airbag pack.</li>
            </ul>
    </div>
     </section>
  );
};