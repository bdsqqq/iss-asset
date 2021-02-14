const Wrapper = () => {
  const draggableRef = useRef<any>();
  const [draggableWidth, setDragableWidth] = useState(0);

  useEffect(() => {
    setDragableWidth(
      draggableRef.current.scrollWidth - draggableRef.current.clientWidth
    );
  }, [draggableRef]);

  const [toolTipShouldAppear, setToolTipShouldAppear] = useState(true);
  const toolTipVariants = {
    showing: {
      y: 0,
      opacity: 0.8,
      transition: {
        delay: 2,
      },
    },
    hidding: {
      y: 2,
      opacity: 0,
    },
  };

  return (
    <div className="box-content overflow-x-hidden" ref={draggableRef}>
      <motion.div
        variants={toolTipVariants}
        animate={toolTipShouldAppear ? "showing" : "hidding"}
        className="ml-8 md:ml-12 mb-4 italic font-light"
      >
        Discover the ISS Modules by dragging
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{
          right: 0,
          left: -draggableWidth - 20,
        }}
        dragElastic={0.03}
        onDragStart={(e) => {
          setToolTipShouldAppear(false);
        }}
        onDragEnd={(e) => {
          setToolTipShouldAppear(true);
        }}
        className="flex dragHandle"
      >
        {timeline.map((year, i) => {
          return (
            <article
              key={`part-${i}`}
              className="flex first:ml-8 first:md:ml-0 md:p-4"
            >
              <header
                id={year.yearNumber}
                className="t-writing-mode-vlr font-light text-4xl"
              >
                {year.yearNumber}
              </header>
              {year.months.map((month, j) => {
                return (
                  <div key={`month-${i}-${j}`} className="flex mr-2">
                    <p
                      id={year.yearNumber + "_" + month.name}
                      className="t-writing-mode-vlr ml-2 mt-14"
                    >
                      — {month.name}
                    </p>
                    <div className="flex mt-4">
                      {month.parts.map(
                        ({ name, nationality, role, description }, k) => {
                          return (
                            <Part
                              key={`part-${i}-${j}-${k}`}
                              name={name}
                              nationality={nationality}
                              role={role}
                              description={description}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
            </article>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Wrapper;

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Part from "./Part";
import timeline from "./timeline";
