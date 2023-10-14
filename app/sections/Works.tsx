import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import Work from "../components/Work"
import { motion } from "framer-motion"
import { fadeUpAnimationVariants, fadeLeftUpAnimationVariants, fadeRightUpAnimationVariants } from '../animations';
import useGetAllWorks from '../hooks/useGetAllWorks';
import SkeletonWork from '../components/SkeletonWork';


const Works = () => {
  const [hasReachedSection, setHasReachedSection] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled to the section
    const worksSection = document.getElementById('works-section');
      if (worksSection && window.scrollY >= worksSection.offsetTop) {
        setHasReachedSection(true);
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {works, loading } = useGetAllWorks();

  const skeletonWorks = ["1","2","3","4"];

  return (
    <div id='works' className="flex flex-col px-[9vw] gap-x-[32px] gap-y-[60px] w-full justify-center items-center overflow-hidden">
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
          Works
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
          Dive into my diverse freelance portfolio
        </motion.p>
      </div>

      {works.length === 0 ? (
        skeletonWorks.map((skeletonWork,index)=>(
          <motion.div
          className='w-full'
          key={index}
          variants={index % 2 === 0 ? fadeLeftUpAnimationVariants : fadeRightUpAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
          >
            <SkeletonWork/>
          </motion.div>
        ))
        
      ) : (
        works.map((work,index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? fadeLeftUpAnimationVariants : fadeRightUpAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
          >
            <Work
              service={work.service}
              name={work.title}
              thumbnail_desktop={work.imageDesktop}
              thumbnail_mobile={work.imageMobile}
              description={work.description}
              caseStudy={work.caseStudy}
              githubRepo={work.githubRepo}
              livePreview={work.livePreview}
            />
          </motion.div>
        ))
      )}

      
    </div>
  )
}

export default Works