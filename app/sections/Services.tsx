import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { motion } from "framer-motion"
import { fadeUpAnimationVariants } from '../animations'

interface ServicesProps {
  contactForm: () => void;
}

const Services: React.FC<ServicesProps> = ({contactForm}) => {
  const [open, setOpen] = React.useState();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      content: 'Elevate user experiences with my tailored UI/UX design services. From intuitive interfaces to seamless navigation, I craft digital journeys that captivate and engage users. Your brand\'s story comes to life through visually appealing designs that prioritize both aesthetics and functionality.',
    },
    {
      id: 2,
      title: 'Front-End Development',
      content: 'Transforming visions into interactive realities, I specialize in front-end development with seamless integration into full-stack solutions. From crafting visually stunning interfaces to architecting scalable and secure server-side solutions, I provide end-to-end development services for a comprehensive digital presence.',
    },
    {
      id: 3,
      title: 'Graphic Design',
      content: 'Immerse your brand in visually striking aesthetics with my graphic design prowess. From logos to marketing collateral, I create captivating visuals that resonate with your audience. Each design is a harmonious blend of creativity and strategic thinking, ensuring your brand stands out in a visually crowded digital landscape.',
    },
  ];

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
            Explore my array of creative solutions, finely crafted and personalized just for you. I'm here to transform your ideas into extraordinary experiences.
          </motion.p>
      </div>
      
      <div className="accordions">
        {services.map((service) => (
          <motion.div
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
            viewport={{
              once: true,
            }} 
            className="accordion"
          >
            <Accordion key={service.id} open={open === service.id}>
              <AccordionHeader className="accordion-header" onClick={() => handleOpen(service.id)}>
                <div className="w-full flex items-center justify-between gap-[20px]">
                  <div className='flex items-start gap-[20px]'>
                    <span className={`font-mainFont font-semibold text-[28px] ${open === service.id ? 'text-accent' : 'text-primaryDark dark:text-primaryLight'}`}>{service.title}</span>
                  </div>
                  <div className={`expand-more-icon ${open === service.id ? 'rotate-[45deg]' : 'rotate-0'}`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1V17V1Z" fill="#121212"/>
                      <path d="M9 1V17" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 8.95068H17H1Z" fill="#121212"/>
                      <path d="M1 8.95068H17" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="flex flex-col gap-[20px] pb-[20px]">
                  <p className="text-textLight dark:text-textDark">{service.content}</p>
                  <div onClick={contactForm} className={`button tertiary w-fit`}>
                    Order Now
                    <span
                      dangerouslySetInnerHTML={{ __html: arrow }}
                      style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    />
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services