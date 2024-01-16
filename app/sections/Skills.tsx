import React from 'react'
import { skills } from '../content'
import { motion } from "framer-motion"
import { fadeUpAnimationVariants } from '../animations'

const Skills = () => {

  return (
    <div id='superpowers' className='w-full px-[9vw] flex flex-col'>
      <div className='flex flex-col gap-[12px] items-center mb-[100px]'>
        <motion.h2 
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
          viewport={{
            once: true,
          }}
          className='text-primaryDark dark:text-primaryLight'>
            Superpowers
        </motion.h2>

        <motion.p 
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
          viewport={{
            once: true,
          }}
          className='text-textLight dark:text-textDark text-center'>
            Unleash my freelance prowess and expertise
        </motion.p>
      </div>
      <div className='grid grid-cols-2 ns:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[32px]'>
        {skills.map((skill,index)=>(
          <motion.div 
            key={index}
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: (index * 0.07), ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
            viewport={{
              once: true,
            }}
            className='bg-[#F3F3F3] border-[1px] border-solid border-borderLight dark:border-borderDark dark:bg-[#1E1E1E] aspect-square flex items-center justify-center rounded-[20px] skill'>
              <div className='skill-icon' dangerouslySetInnerHTML={{ __html: skill.icon }} />
              <span className='skill-name bg-primaryDark text-primaryLight dark:bg-primaryLight dark:text-primaryDark text-[14px] font-medium rounded-full p-[3px_8px]'>{skill?.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills