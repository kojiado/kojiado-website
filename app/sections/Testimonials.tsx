import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import { bojnakova, tresnjo, jules, jelena, erica } from '../assets'
import { fadeUpAnimationVariants } from '../animations';

const Testimonials = () => { 
  const [isThereSpaceForMessage, setIsThereSpaceForMessage] = useState(true);
  const testimonialBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clientBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [elementPosition, setElementPosition] = useState<number | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Update windowWidth after component mounts
    setWindowWidth(window.innerWidth);

    // Update windowWidth on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    const clientBox = clientBoxRefs.current[index];
    const imgElement = clientBox?.querySelector('img');

    const testimonialsDiv = document.getElementById('clients2');
    const testimonialsWidth = testimonialsDiv?.offsetWidth;

    if (imgElement) {
      imgElement.style.transform = 'scale(1.5)';
    }

    setTimeout(() => {
      setActiveIndex(index);
    }, 100);

    if (leaveTimeout !== null) {
      clearTimeout(leaveTimeout);
    }
    setLeaveTimeout(null);


    setTimeout(() => {
      if (windowWidth < 625 && clientBox) {
        const clientBoxRect = clientBox.getBoundingClientRect();
        const availableSpace = windowWidth - clientBoxRect.left - 32 - 80 - 4;
        const messageAvailableSpace = windowWidth - clientBoxRect.left - 32;
        setIsThereSpaceForMessage(messageAvailableSpace > 384);
        setElementPosition(clientBoxRect.left); 
      } else if (clientBox) {
        const clientBoxRect = clientBox.getBoundingClientRect();
        if (!testimonialsDiv) {
          return null;
        }
        const testimonialsWidth = testimonialsDiv.offsetWidth / 2;
        const testimonialBoxRect = testimonialsDiv.getBoundingClientRect();
        const rightSideSpace = windowWidth - testimonialBoxRect.right;
        const availableSpace = (windowWidth - clientBoxRect.left) - rightSideSpace - 80;
        const messageAvailableSpace = (windowWidth - clientBoxRect.left) - rightSideSpace;
        setIsThereSpaceForMessage(messageAvailableSpace > 384);
        setElementPosition(clientBoxRect.left);  
      }
    }, 0);

    
  };

  const handleMouseLeave = (index) => {
    const clientBox = clientBoxRefs.current[index];
    if(!clientBox) {
      return;
    }
    const imgElement = clientBox.querySelector('img');
  
    if (imgElement) {
      imgElement.style.transform = 'scale(1)';
    }
  
    // Add a delay before setting the active index to null
    const timeoutId = setTimeout(() => {
      setActiveIndex(null);
    }, 100);
  
    // Save the timeout ID to cancel it if necessary
    setLeaveTimeout(timeoutId);

    // Add the hide class to trigger the zoomOut animation
    testimonialBoxRefs.current[index]?.classList.add('hide');
  };

  useLayoutEffect(() => {
    const testimonialsDiv = document.getElementById('clients2');
    if(!testimonialsDiv) {
      return;
    }
    const testimonialsWidth = testimonialsDiv.offsetWidth / 2;

    
    if (testimonialsWidth < 384) {
      if (activeIndex !== null) {
        if(!elementPosition) {
          return;
        }
        const beforePosition = elementPosition + 18;
        clientBoxRefs.current[activeIndex]?.classList.add('client-box-full-width');
        testimonialBoxRefs.current[activeIndex]?.classList.add('testimonial-box-full-width');
        testimonialBoxRefs.current[activeIndex]?.style.setProperty('--pseudo-element-left', `${beforePosition}px`);
      } 
    } else {
      if (activeIndex !== null && !isThereSpaceForMessage) {
        testimonialBoxRefs.current[activeIndex]?.classList.add('right-0');
        testimonialBoxRefs.current[activeIndex]?.classList.add('testimonial-box-overflow');
      } else if (activeIndex !== null && isThereSpaceForMessage) {
        testimonialBoxRefs.current[activeIndex]?.classList.add('left-0');
      } 
    }

  }, [activeIndex,elementPosition,isThereSpaceForMessage]);


  return (
    <div id="clients" className='flex flex-col mx-auto justify-center items-center w-full px-[9vw] sm:px-[18vw]'>
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
            Clients
        </motion.h2>
        <motion.p 
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
          viewport={{
            once: true,
          }}
          className='text-textLight dark:text-textDark'>
            Join the ranks of satisfied clients
        </motion.p>
      </div>
      <motion.div variants={fadeUpAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }} id="clients2" className='justify-center gap-y-[8px] gap-x-[10px] text-[30px] sm:text-[36px] font-bold flex flex-wrap items-center w-full clients'>
        <div className='flex text-primaryDark dark:text-primaryLight'>If</div> 
        <div className='flex text-primaryDark dark:text-primaryLight'>client</div>
        <div className='client-box relative' ref={ref => clientBoxRefs.current[0] = ref}>
          <div className='relative rounded-full overflow-hidden'>
            <Image alt='Naida Bocnak Image' className='h-[40px] w-[60px] rounded-full object-cover' src={bojnakova} onMouseEnter={() => handleMouseEnter(0)} onMouseOut={() => handleMouseLeave(0)}/>
          </div>
          <div ref={ref => testimonialBoxRefs.current[0] = ref} className={`testimonial-box ${activeIndex === 0 ? 'show' : 'hide'} bg-primaryDark dark:bg-primaryLight`}>
            <p className='testimonial text-textDark dark:text-textLight'>&quot;All accolades for kojiado, which makes communication and collaboration a breeze Excellent services!&quot;</p>
            <div className='client-name mt-[16px] text-left'>
              <h6 className='text-[14px] text-primaryLight dark:text-primaryDark'>Naida Bocnak</h6>
              <p className='text-[12px] text-textDark dark:text-textLight'>Youtuber / Influencer</p>
            </div>
          </div>
        </div>
        <div className='flex text-primaryDark dark:text-primaryLight'>satisfaction</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>were</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>a</div>
        <div className='client-box relative' ref={ref => clientBoxRefs.current[1] = ref}>
          <div className='relative rounded-full overflow-hidden'>
            <Image alt='Erica Saint Wiltz Image' className='h-[40px] w-[60px] rounded-full object-cover' src={erica} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)} />
          </div>
          <div ref={ref => testimonialBoxRefs.current[1] = ref} className={`testimonial-box ${activeIndex === 1 ? 'show' : ''} bg-primaryDark dark:bg-primaryLight`}>
            <p className='testimonial text-textDark dark:text-textLight'>&quot;Amazing to work with. Very responsive and detail oriented. Easy back and forth with as many edits as I needed. I am very pleased with the final product and will definitely be a returning customer.&quot;</p>
            <div className='client-name mt-[16px] text-left'>
              <h6 className='text-[14px] text-primaryLight dark:text-primaryDark'>Erica Saint Wiltz</h6>
              <p className='text-[12px] text-textDark dark:text-textLight'>Model / Actor</p>
            </div>
          </div>
        </div>
        <div className='flex text-primaryDark dark:text-primaryLight'>Olympic</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>sport</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>,</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>I&apos;d</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>be</div>
        <div className='flextext-primaryDark dark:text-primaryLight'>a</div>
        <div className='client-box relative'  ref={ref => clientBoxRefs.current[2] = ref}>
          <div className='relative rounded-full overflow-hidden'>
            <Image alt='Jelena Jugović Tunçel Image' className='h-[40px] w-[60px] rounded-full object-cover' src={jelena} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} />
          </div>
          <div ref={ref => testimonialBoxRefs.current[2] = ref} className={`testimonial-box ${activeIndex === 2 ? 'show' : ''} bg-primaryDark dark:bg-primaryLight`}>
            <p className='testimonial text-textDark dark:text-textLight'>&quot;A young and talented guy who really knows his job. What was important to me was that he was open to cooperation and kept up with the times.&quot;</p>
            <div className='client-name mt-[16px] text-left'>
              <h6 className='text-[14px] text-primaryLight dark:text-primaryDark'>Jelena Jugović Tunçel</h6>
              <p className='text-[12px] text-textDark dark:text-textLight'>Influencer</p>
            </div>
          </div>
        </div>
        <div className='flex text-primaryDark dark:text-primaryLight'>gold</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>medalist</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>with</div>
        <div className='client-box relative' ref={ref => clientBoxRefs.current[3] = ref}>
          <div className='relative rounded-full overflow-hidden'>
            <Image alt='Enver Trešnjo Image' className='h-[40px] w-[60px] rounded-full object-cover' src={tresnjo} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}/>
          </div>
          <div ref={ref => testimonialBoxRefs.current[3] = ref} className={`testimonial-box ${activeIndex === 3 ? 'show' : ''} bg-primaryDark dark:bg-primaryLight`}>
            <p className='testimonial text-textDark dark:text-textLight'>&quot;Thank you for your professional and expert relationship. I am very pleased with your work.&quot;</p>
            <div className='client-name mt-[16px] text-left'>
              <h6 className='text-[14px] text-primaryLight dark:text-primaryDark'>Enver Trešnjo</h6>
              <p className='text-[12px] text-textDark dark:text-textLight'>Dentist</p>
            </div>
          </div>
        </div>
        <div className='flex text-primaryDark dark:text-primaryLight'>testimonials</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>as</div>
        <div className={`client-box relative`}  ref={ref => clientBoxRefs.current[4] = ref}>
          <div className='relative rounded-full overflow-hidden'>
            <Image alt="Jules Hauptman Image" className='h-[40px] w-[60px] rounded-full object-cover' src={jules} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(4)}/>
          </div>
          <div ref={ref => testimonialBoxRefs.current[4] = ref} className={`testimonial-box ${activeIndex === 4 ? 'show' : ''} bg-primaryDark dark:bg-primaryLight`}>
            <p className='testimonial text-textDark dark:text-textLight'>&quot;Quality work and will satisfy your expectations! Highly recommended!&quot;</p>
            <div className='client-name mt-[16px] text-left'>
              <h6 className='text-[14px] text-primaryLight dark:text-primaryDark'>Jules Hauptman</h6>
              <p className='text-[12px] text-textDark dark:text-textLight'>Lifestyle Blogger</p>
            </div>
          </div>
        </div>
        <div className='flex text-primaryDark dark:text-primaryLight'>my</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>victory</div>
        <div className='flex text-primaryDark dark:text-primaryLight'>chant!</div>
      </motion.div>
    </div>
  )
}

export default Testimonials