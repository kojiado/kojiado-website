import React from 'react'

/* FRAMER MOTION */
import { motion } from "framer-motion"
import { fadeDownAnimationVariants, fadeUpAnimationVariants, fadeInAnimationVariants } from '../animations';

const SkeletonProject = () => {
  return (
    <div className='flex flex-col gap-[60px] sm:gap-[160px]'>
        <motion.div
        variants={fadeUpAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
        viewport={{
          once: true,
        }}
        >
          <div className='skeleton rounded-[14px] sm:rounded-[28px] w-full object-cover max-h-[500px] mt-[38px] aspect-[1920/800] sm:aspect-[1920/500]'/>
        </motion.div>

        <div className='flex flex-col md:flex-row justify-between gap-[32px]'>
          <div className='w-full md:w-1/3'>
            <motion.h2
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
            viewport={{
              once: true,
            }}
            className='w-[200px] h-[50px] skeleton rounded-full'>
            </motion.h2>
          </div>
          <div className='w-full md:w-2/3 flex flex-col gap-[60px]'>
            <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex flex-col gap-[6px]'>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
            </motion.div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-[28px]'>
              <div className='flex flex-col gap-[8px]'>
                <motion.div
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                viewport={{
                  once: true,
                }}
                className='skeleton w-[80px] h-[18px] rounded-full'>
                </motion.div>

                <motion.div
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                viewport={{
                  once: true,
                }}
                className='skeleton w-[110px] h-[25px] skeleton rounded-full'>
                </motion.div>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <motion.div
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                viewport={{
                  once: true,
                }}
                className='skeleton w-[80px] h-[18px] rounded-full'></motion.div>
                <ul className='flex flex-col gap-[6px]'>
                    <li>
                      <motion.div
                      variants={fadeUpAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                      viewport={{
                        once: true,
                      }}
                        className='skeleton w-[110px] h-[25px] skeleton rounded-full'>
                      </motion.div>
                    </li>
                </ul>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <motion.div
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                viewport={{
                  once: true,
                }}
                className='skeleton w-[80px] h-[18px] rounded-full'>
                </motion.div>

                <motion.div
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                viewport={{
                  once: true,
                }}
                className='skeleton w-[110px] h-[25px] rounded-full'>
                </motion.div>
              </div>
            </div>
          </div>
        </div>


        <div className='w-full h-[1px] bg-[#EDEDED] dark:bg-[#1E1E1E]'></div>

        <div className='flex flex-col md:flex-row justify-between gap-[32px]'>
          <div className='w-full md:w-1/3'>
            <motion.h2
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
            viewport={{
              once: true,
            }}
            className='w-[200px] h-[50px] skeleton rounded-full'>
            </motion.h2>
          </div>
          <div className='w-full md:w-2/3 flex flex-col gap-[60px]'>
            <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex flex-col gap-[6px]'>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
            </motion.div>
          </div>
        </div>

        <div className='w-full h-[1px] bg-[#EDEDED] dark:bg-[#1E1E1E]'></div>

        <div className='flex flex-col md:flex-row justify-between gap-[32px]'>
          <div className='w-full md:w-1/3'>
            <motion.h2
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
            viewport={{
              once: true,
            }}
            className='w-[200px] h-[50px] skeleton rounded-full'>
            </motion.h2>
          </div>
          <div className='w-full md:w-2/3 flex flex-col gap-[60px]'>
            <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex flex-col gap-[6px]'>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
            </motion.div>
            <ul className='flex flex-col gap-[12px]'>
              <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex items-center gap-[12px]'>
                <div className='w-[10px] h-[10px] rounded-full skeleton'></div><div className='skeleton rounded-full w-[150px] h-[18px]'></div>
              </motion.div>
              <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex items-center gap-[12px]'>
                <div className='w-[10px] h-[10px] rounded-full skeleton'></div><div className='skeleton rounded-full w-[150px] h-[18px]'></div>
              </motion.div>
              <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex items-center gap-[12px]'>
                <div className='w-[10px] h-[10px] rounded-full skeleton'></div><div className='skeleton rounded-full w-[150px] h-[18px]'></div>
              </motion.div>
            </ul>
          </div>
        </div>


        <div className='w-full h-[1px] bg-[#EDEDED] dark:bg-[#1E1E1E]'></div>

        <div className='flex flex-col md:flex-row justify-between gap-[32px]'>
          <div className='w-full md:w-1/3'>
            <motion.h2
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
            viewport={{
              once: true,
            }}
            className='w-[200px] h-[50px] skeleton rounded-full'>
            </motion.h2>
          </div>
          <div className='w-full md:w-2/3 flex flex-col gap-[60px]'>
            <motion.div
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex flex-col gap-[6px]'>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
                <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
            </motion.div>
            <ul className='flex flex-col gap-[16px]'>
              <motion.li
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex items-center gap-[20px]'>
                <div className='w-[54px] h-[54px] rounded-[10px] skeleton'></div>
                <div className='skeleton w-[100px] h-[18px] rounded-full'></div>
              </motion.li>
              <motion.li
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex items-center gap-[20px]'>
                <div className='w-[54px] h-[54px] rounded-[10px] skeleton'></div>
                <div className='skeleton w-[100px] h-[18px] rounded-full'></div>
              </motion.li>
              <motion.li
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='flex items-center gap-[20px]'>
                <div className='w-[54px] h-[54px] rounded-[10px] skeleton'></div>
                <div className='skeleton w-[100px] h-[18px] rounded-full'></div>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className='w-full h-[1px] bg-[#EDEDED] dark:bg-[#1E1E1E]'></div>

        <div className='flex flex-col gap-[80px]'>
          <div className='flex flex-col md:flex-row justify-between gap-[32px]'>
            <div className='w-full md:w-1/3'>
              <motion.h2
              variants={fadeUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
              viewport={{
                once: true,
              }}
              className='w-[200px] h-[50px] skeleton rounded-full'>
              </motion.h2>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-[60px]'>
              <motion.div
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
                viewport={{
                  once: true,
                }}
                className='flex flex-col gap-[6px]'>
                  <div className='w-full h-[18px] skeleton rounded-full'></div>
                  <div className='w-full h-[18px] skeleton rounded-full'></div>
                  <div className='w-full h-[18px] skeleton rounded-full'></div>
                  <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
                  <div className='block sm:hidden w-full h-[18px] skeleton rounded-full'></div>
              </motion.div>
            </div>
          </div>
          <div className="w-full aspect-[1200/800] rounded-[14px] sm:rounded-[28px] skeleton"/>
        </div>

        {/* 
        <div className='rounded-[40px] p-[32px_36px] flex items-center justify-between border-solid border-[1px] border-borderLight dark:border-borderDark'>
            <div className='flex flex-col gap-[5px]'>
              <div className='skeleton w-[100px] h-[18px] rounded-full'></div>
              <div className='w-[140px] h-[28px] skeleton rounded-full'></div>
            </div>
            <div className='w-[150px] h-[50px] skeleton rounded-[15px]'></div>
        </div>
        */}

      </div>
  )
}

export default SkeletonProject