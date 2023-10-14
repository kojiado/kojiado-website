import Button from "../components/Button"
import { motion } from "framer-motion"
import { fadeUpAnimationVariants } from '../animations'
import { useState } from "react";

interface ContactProps {
  contactForm: () => void;
}

const Contact: React.FC<ContactProps> = ({contactForm}) => {
  const [isCtaPhoneHovered, setIsCtaPhoneHovered] = useState(false);
  const [isCtaMailHovered, setIsCtaMailHovered] = useState(false);

  const handleCtaPhoneHover = () => {
    setIsCtaPhoneHovered(true);
  };

  const handleCtaPhoneLeave = () => {
    setIsCtaPhoneHovered(false);
  };

  const handleCtaMailHover = () => {
    setIsCtaMailHovered(true);
  };

  const handleCtaMailLeave = () => {
    setIsCtaMailHovered(false);
  };

  return (
    <div id="contact" className="w-full px-[9vw] flex flex-col items-center justify-center">
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
            Contact
        </motion.h2>
        <motion.p 
          variants={fadeUpAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
          viewport={{
            once: true,
          }}
          className='text-textLight dark:text-textDark w-full sm:w-[450px] text-center'>
            Feel free to get in touch with me, and I&apos;ll be glad to help or answer any questions you may have.
        </motion.p>
      </div>
      <motion.div
        variants={fadeUpAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ ease: [0.71,0.08,0.2,0.92], duration: 0.75 }}
        viewport={{
          once: true,
        }}
        className="flex flex-col items-center">
        <div className="flex flex-col ss:flex-row p-[30px] rounded-[40px] border-borderLight dark:border-borderDark border-solid border-[1px]">
          <div className="flex gap-[14px] items-center h-fit">
            <div className={`border-borderLight dark:border-borderDark border-solid border-[1px] w-[50px] h-[50px] flex items-center justify-center rounded-[10px] cta-email-icon ${isCtaMailHovered ? 'active' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21.913" height="18" viewBox="0 0 21.913 18">
                <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close" transform="translate(0 -1.25)">
                  <path className="fill-primaryDark dark:fill-primaryLight" id="Vector" d="M2.348,1.25H19.565A2.35,2.35,0,0,1,21.913,3.6V16.9a2.35,2.35,0,0,1-2.348,2.348H2.348A2.35,2.35,0,0,1,0,16.9V3.6A2.35,2.35,0,0,1,2.348,1.25ZM19.565,17.685a.783.783,0,0,0,.783-.783V3.6a.783.783,0,0,0-.783-.783H2.348a.783.783,0,0,0-.783.783V16.9a.783.783,0,0,0,.783.783Z" transform="translate(0 0)" fill="#121212"/>
                  <path className="fill-primaryDark dark:fill-primaryLight" id="Vector_2" d="M10.957,9.836a2.754,2.754,0,0,1-1.4-.363L.379,3.953a.783.783,0,1,1,.807-1.341l9.172,5.516a1.32,1.32,0,0,0,1.2,0l9.166-5.512a.783.783,0,0,1,.807,1.341L12.362,9.469A2.759,2.759,0,0,1,10.957,9.836Z" transform="translate(0 0.706)" fill="#121212"/>
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-textLight dark:text-textDark">Email</p>
              <a onMouseEnter={handleCtaMailHover} onMouseLeave={handleCtaMailLeave} href="mailto:hello@kojiado.com" className="text-primaryDark dark:text-primaryLight text-[22px] button tertiary cta-email">hello@kojiado.com</a>
            </div>
          </div>
          <div className="w-full h-[1px] ss:w-[1px] ss:h-[50px] bg-borderLight dark:bg-borderDark my-[30px] mx-0 ss:my-0 ss:mx-[30px]"></div>
          <div className="flex gap-[14px] items-center">
            <div className={`border-borderLight dark:border-borderDark border-solid border-[1px] w-[50px] h-[50px] flex items-center justify-center rounded-[10px] cta-phone-icon ${isCtaPhoneHovered ? 'active' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18.015" height="18" viewBox="0 0 18.015 18">
                <g id="phone--android-phone-mobile-device-smartphone-iphone" transform="translate(-0.004 -0.01)">
                  <path className="fill-primaryDark dark:fill-primaryLight" id="Vector" d="M4.536,18.01A4.711,4.711,0,0,1,1.162,16.6l-.574-.56-.011-.011a2.044,2.044,0,0,1,0-2.84l.007-.008,2.454-2.43a2.019,2.019,0,0,1,2.832,0,.744.744,0,0,0,1.037,0l3.85-3.85a.719.719,0,0,0,0-1.027l-.007-.007a2.029,2.029,0,0,1,0-2.83L13.2.594l.005-.005a2.032,2.032,0,0,1,2.84,0L16.057.6l.561.575a4.764,4.764,0,0,1,.65,5.94l-.008.013A37.662,37.662,0,0,1,7.116,17.246l-.011.007A4.731,4.731,0,0,1,4.536,18.01ZM1.494,15.127l.572.558.009.009a3.455,3.455,0,0,0,4.327.481,36.379,36.379,0,0,0,9.788-9.763,3.471,3.471,0,0,0-.48-4.325L15.7,2.078,15.142,1.5a.744.744,0,0,0-1.033,0l-2.44,2.438a.734.734,0,0,0,0,1.019,2.006,2.006,0,0,1,0,2.852l-3.85,3.85-.005.005a2.032,2.032,0,0,1-2.84,0,.731.731,0,0,0-1.026,0L1.5,14.095A.749.749,0,0,0,1.494,15.127Z" transform="translate(0)" fill="#121212"/>
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-textLight dark:text-textDark">Phone</p>
              <a onMouseEnter={handleCtaPhoneHover} onMouseLeave={handleCtaPhoneLeave} href="tel:+387603530777" className="text-primaryDark dark:text-primaryLight text-[22px] button tertiary cta-phone">+387603530777</a>
            </div>
          </div>
        </div>
        <p className="text-textLight dark:text-textDark my-[30px]">OR</p>
        <Button
          label="Fill the form"
          type="primary"
          onClick={contactForm}
        />
      </motion.div>
    </div>
  )
}

export default Contact