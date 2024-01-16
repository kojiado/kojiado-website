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
            className='absolute short:top-[65px] top-[85px] short:left-[40px] left-[50px] w-[118px] flex items-center gap-[5px] rounded-[2px_15px_15px_15px_] p-[6px_12px] bg-[#22AB62]'
          >
            <div className='w-[6px] h-[6px] rounded-[6px] bg-[#5CF399]'></div>
            <p className='text-primaryLight text-[12px] font-mainFont font-semibold'>Open to Work.</p>
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
          className='text-[48px] leading-[64px] sm:text-[64px] sm:leading-[83px] text-primaryDark dark:text-primaryLight text-center mt-[40px] md:x-[80px] lg:px-[140px]'>
            I Design.<br></br>
            I Code.
        </motion.h1>
        
        <div className='short:flex-col flex flex-wrap justify-center gap-[12px] mt-[40px]'>
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
            <a href="#about" className={`button secondary border-borderLight text-primaryDark dark:border-borderDark dark:text-primaryLight ${isDark ? 'light-icon' : 'dark-icon'}`}>
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header