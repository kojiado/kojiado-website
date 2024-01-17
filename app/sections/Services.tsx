import React from "react";

import { services } from "../content";
import { motion } from "framer-motion"
import { fadeUpAnimationVariants } from '../animations'

interface ServicesProps {
  contactForm: () => void;
}

const Services: React.FC<ServicesProps> = ({contactForm}) => {
  const arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="13.994" height="12" viewBox="0 0 13.994 12"><path class="dark:fill-primaryLight fill-primaryDark" id="arrow-right-solid" d="M13.7,70.631a1,1,0,0,0,0-1.415l-5-5a1,1,0,0,0-1.415,1.415l3.3,3.292H1a1,1,0,1,0,0,2H10.58L7.291,74.217a1,1,0,0,0,1.415,1.415l5-5Z" transform="translate(0 -63.925)" fill="#fff"/></svg>'

  return (
    <div id='services' className='flex flex-col gap-[100px] px-[9vw]'>
      <div className='flex flex-col sm:flex-row justify-between gap-[12px]'>
        <motion.h2
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
          viewport={{
            once: true,
          }} 
          className='text-primaryDark dark:text-primaryLight'>
            Services
        </motion.h2>
        <motion.p
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
          viewport={{
            once: true,
          }}
          className='w-full sm:max-w-[600px] text-textLight dark:text-textDark'>
            Explore my array of creative solutions, finely crafted and personalized just for you. I&apos;m here to transform your ideas into extraordinary experiences.
          </motion.p>
      </div>
      
      <div className="services">
        {services.map((service) => (
          <motion.div
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
            viewport={{
              once: true,
            }} 
            key={service.id}
            className="flex gap-[28px] sm:gap-[100px] service"
          >
            <span className="id text-[36px] sm:text-[64px]">0{service.id}</span>
            <div className="flex flex-col gap-[20px]">
              <span className="font-mainFont font-semibold text-[28px] text-primaryDark dark:text-primaryLight">{service.title}</span>
              <p className="text-textLight dark:text-textDark">{service.content}</p>
              <div onClick={contactForm} className={`button tertiary w-fit`}>
                Order Now
                <span
                  dangerouslySetInnerHTML={{ __html: arrow }}
                  style={{ display: 'inline-block', verticalAlign: 'middle' }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services