import React from 'react'
import { social } from '../content'
import { motion } from "framer-motion"
import { fadeUpAnimationVariants } from '../animations'

const About = () => {

  return (
    <div id='about' className='w-full px-[9vw] sm:px-[18vw] flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-[12px] items-center mb-[100px]'>
        <motion.h2
        variants={fadeUpAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
        viewport={{
          once: true,
        }} 
        className='text-primaryDark dark:text-primaryLight text-[36px] leading-[54px]'>
          About
        </motion.h2>

        <motion.p
        variants={fadeUpAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
        viewport={{
          once: true,
        }} 
        className='text-textLight dark:text-textDark text-center w-full sm:w-[450px]'>
          Unveiling a freelance wizard - skilled, passionate, and ready to bring magic to your projects.
        </motion.p>
      </div>
      <motion.h2 
      variants={fadeUpAnimationVariants}
      initial="initial"
      whileInView="animate"
      transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
      viewport={{
        once: true,
      }} 
      className='text-primaryDark dark:text-primaryLight text-[20px] leading-[30px] ss:text-[30px] ss:leading-[45px] text-center'>
        Hey there! I&apos;m <span className='bg-[#18A7B7] rounded-[10px] p-[4px_8px] ss:p-[6px_12px] text-[18px] ss:text-[24px] text-primaryLight'>Adnan Brkić</span>, a 23-year-old UI/UX Designer & Front-End Developer. Currently pursuing my 3rd year in Information Technologies at International Burch University, I&apos;m deeply passionate about crafting seamless user experiences and captivating designs. When I&apos;m not immersed in the digital realm, you can find me hitting the gym to stay fit, reading books for endless inspiration, and diving into the world of music and podcasts for some delightful vibes.
      </motion.h2>
      <div className='flex flex-col gap-[40px] items-center mt-[80px]'>
        <motion.p 
        variants={fadeUpAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
        viewport={{
          once: true,
        }} 
        className='text-textLight dark:text-textDark'>
          You can find me here
        </motion.p>
        <div className='flex gap-[20px]'>
          {social.map((item,index)=>(
            <motion.a 
            key={index}
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: (index * 0.07), ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
            viewport={{
              once: true,
            }}
            href={item?.link} target='_blank' 
            className='social dark:border-borderDark border-borderLight dark:hover:bg-primaryLight hover:bg-primaryDark'>
              <div className='' dangerouslySetInnerHTML={{ __html: item.icon }} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About