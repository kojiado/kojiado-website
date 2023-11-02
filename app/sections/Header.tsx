import Image from 'next/image';
import Navbar from '../components/Navbar'
import Button from '../components/Button';
import { kojiado } from '../assets';
import { motion } from "framer-motion"
import { fadeDownAnimationVariants, fadeUpAnimationVariants } from '../animations';

interface NavbarProps {
  isDark : boolean;
  makeDark : () => void;
  contactForm: () => void;
}

const Header: React.FC<NavbarProps> = ({isDark,makeDark,contactForm}) => {
  const contactIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="15.998" height="16" viewBox="0 0 15.998 16"><path id="mail-send-email" d="M14.122.051a2.223,2.223,0,0,0-.429.084c-.1.03-12,4-12.073,4.025A2.024,2.024,0,0,0,.372,6.537a1.889,1.889,0,0,0,.163.438,1.867,1.867,0,0,0,.245.374c.028.033.7.711,1.491,1.507L3.712,10.3l-.047,1.754c-.026.965-.046,1.778-.046,1.806a.78.78,0,0,0,.621.736,1.06,1.06,0,0,0,.288,0,5.872,5.872,0,0,0,1.252-.608l1.068-.555L7.9,14.485c.579.576,1.075,1.066,1.1,1.088a2.045,2.045,0,0,0,.922.438,2.212,2.212,0,0,0,.548.03,2.061,2.061,0,0,0,.831-.255,2.779,2.779,0,0,0,.272-.185,2.779,2.779,0,0,0,.283-.277,2.051,2.051,0,0,0,.333-.56c.029-.075,4.005-12.01,4.04-12.126a2.061,2.061,0,0,0,.057-.872A2.027,2.027,0,0,0,14.612.073a2.325,2.325,0,0,0-.49-.022M7.447,3.857c-3.5,1.169-5.315,1.775-5.341,1.789a.573.573,0,0,0-.18.189.372.372,0,0,0-.05.221.347.347,0,0,0,.017.144c.037.11-.041.027,1.358,1.43.711.713,1.294,1.3,1.3,1.3s1.845-1.535,4.1-3.411l4.1-3.419c.005,0,.008-.008.007-.008L7.447,3.857m2.5,2.6L5.274,10.352l0,.046c-.006.055-.058,2.046-.055,2.1l0,.036.582-.3c.8-.415.895-.464.954-.484A.724.724,0,0,1,7,11.706a.76.76,0,0,1,.464.152c.021.016.6.589,1.289,1.275s1.263,1.256,1.277,1.266a.469.469,0,0,0,.709-.2c.018-.044,3.878-11.632,3.874-11.632L9.943,6.46" transform="translate(-0.313 -0.047)" fill="#fff" fill-rule="evenodd"/></svg>'

  return (
    <div id='home' className='flex flex-col h-[100svh] relative px-[9vw]'>
      <motion.div
        variants={fadeDownAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.5, ease: [0.71,0.08,0.2,0.92], duration: 1 }}
        viewport={{
          once: true,
        }}
      >
        <Navbar
          isDark={isDark}
          makeDark={makeDark}
        />
      </motion.div>
      <div className='flex-1 flex flex-col justify-center items-center'>

        <div className='relative'>
          <motion.div
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ ease: [0.71,0.08,0.2,0.92], duration: 1 }}
            viewport={{
              once: true,
            }}
          >
            <Image priority={true}  alt="kojiado-image" src={kojiado} className='short:w-[80px] short:h-[80px] w-[100px] h-[100px] rounded-[20px] object-cover'/>
          </motion.div>
          <motion.div
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 1.1, ease: [0.71,0.08,0.2,0.92], duration: 0.5 }}
            viewport={{
              once: true,
            }}
            className='absolute short:top-[65px] top-[85px] short:left-[40px] left-[50px] w-[108px]'
          >
            <p className='rounded-[2px_15px_15px_15px_] p-[6px_12px] bg-[#18A7B7] text-primaryLight text-[12px]'>Open to Work.</p>
          </motion.div>
        </div>

        <motion.h1 
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.15, ease: [0.71,0.08,0.2,0.92], duration: 1 }}
          viewport={{
            once: true,
          }}
          className='short:text-[24px] short:leading-[36px] text-[32px] leading-[48px] sm:text-[48px] sm:leading-[72px] xxl:text-[64px] xxl:leading-[83px] text-primaryDark dark:text-primaryLight text-center mt-[40px] md:x-[80px] lg:px-[140px]'>
            Your friendly neighborhood UI/UX Designer and Front-End Developer
        </motion.h1>
        
        <div className='short:flex-col flex flex-wrap justify-center gap-[16px] mt-[40px]'>
          <motion.div
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay:0.4, ease: [0.71,0.08,0.2,0.92], duration: 1 }}
          viewport={{
            once: true,
          }}
          >
            <Button
              label="Let's talk"
              type="primary"
              icon={contactIcon}
              onClick={contactForm}
            />
          </motion.div>

          <motion.div
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ delay:0.45, ease: "backOut", duration: 1 }}
          viewport={{
            once: true,
          }}
          >
            <a download="/Adnan_Brkic_CV.pdf" href="/Adnan_Brkic_CV.pdf" className={`button secondary border-borderLight text-primaryDark dark:border-borderDark dark:text-primaryLight ${isDark ? 'light-icon' : 'dark-icon'}`}>
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="13.798" height="16" viewBox="0 0 13.798 16"><path id="interface-file-text_2_" data-name="interface-file-text (2)" d="M174.253.085a1.938,1.938,0,0,0-1.742,1.7c-.011.082-.011.4-.011,6.3s0,6.217.011,6.3a1.946,1.946,0,0,0,1.666,1.688c.074.011.286.012,5.22.012s5.147,0,5.22-.012a1.9,1.9,0,0,0,.626-.2,1.92,1.92,0,0,0,.955-1.114,1.774,1.774,0,0,0,.094-.5c.01-.172,0-7.918-.005-7.967a.915.915,0,0,0-.166-.374c-.016-.021-1.289-1.3-2.83-2.839C180.953.736,180.479.265,180.431.232a.9.9,0,0,0-.243-.119,19.248,19.248,0,0,0-3.025-.034c-1.569,0-2.878,0-2.91.006m.1,1.663a.3.3,0,0,0-.164.137c-.033.064-.031-.348-.031,6.195s0,6.13.031,6.2a.3.3,0,0,0,.172.139c.047.014,10.033.014,10.08,0a.3.3,0,0,0,.172-.139,30.451,30.451,0,0,0,.031-3.807V6.77l-2.517-2.517-2.517-2.517h-2.612c-2.459,0-2.614,0-2.644.012M176.488,4.5a.833.833,0,0,0-.665.671,1.155,1.155,0,0,0,0,.29.844.844,0,0,0,.551.641c.126.042.059.04,1.4.038l1.213,0,.064-.017a.837.837,0,0,0,.624-.805.833.833,0,0,0-.678-.816c-.054-.009-.192-.01-1.258-.01-.976,0-1.207,0-1.249.009m.006,3.31a.843.843,0,0,0-.671.668,1.2,1.2,0,0,0,0,.279.828.828,0,0,0,.278.5.781.781,0,0,0,.471.2c.1.009,5.558.009,5.659,0a.762.762,0,0,0,.373-.124.841.841,0,0,0,.3-.34.739.739,0,0,0,.08-.365.777.777,0,0,0-.252-.591.787.787,0,0,0-.324-.2,18.572,18.572,0,0,0-3.015-.035c-2.363,0-2.854,0-2.9.009m.02,3.309a.813.813,0,0,0-.531.314.771.771,0,0,0-.149.3.615.615,0,0,0-.017.2.649.649,0,0,0,.015.195.838.838,0,0,0,.669.623c.066.012,5.728.012,5.794,0a.834.834,0,0,0,.515-.308.78.78,0,0,0,.155-.318,1.268,1.268,0,0,0,0-.387.828.828,0,0,0-.244-.412.793.793,0,0,0-.461-.216c-.087-.01-5.671-.007-5.746,0" transform="translate(-172.5 -0.078)" fill="#fff" fillRule="evenodd"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header