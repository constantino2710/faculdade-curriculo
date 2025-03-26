import { useState, useEffect, useRef } from 'react';
import {motion} from 'framer-motion';
import { div } from 'framer-motion/client';

import img1 from '../../assets/Ignite_feed.png';
import img2 from '../../assets/Pomodojo.png';
import img3 from '../../assets/Site.png';
import img4 from '../../assets/yellow_crabb.png';

const images = [img1, img2, img3, img4];

export function Carousel() {

  const carousel = useRef()
  const [widith, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth) 
  }, [])

  return (
    <div className="flex justify-center items-center "
    >
      <motion.div ref={carousel}
      className="w-[900px] overflow-hidden cursor-grab"
      whileTap={{ cursor: 'grabbing' }}

      >

        <motion.div 
        className="flex gap-4 justify-start"
        drag="x"
        dragConstraints={{ left: -widith, right: 0 }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{duration: 0.5}}
        >
          {images.map((image) => (
            <motion.div
              key={image}
              className="w-[300px] h-[200px] flex-shrink-0"
            >
              <img
                src={image}
                alt="carousel"
                className="w-full h-full object-cover rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
