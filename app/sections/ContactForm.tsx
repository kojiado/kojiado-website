import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm:React.FC<ContactFormProps> = ({isOpen, onClose}) => {
  // Check if window is defined (i.e., we're on the client side)
  const isClient = typeof window !== 'undefined';
  // Check if it's a mobile device using userAgent
  const isMobile = isClient && /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModalContainerOpen, setIsModalContainerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [infoBanner, setInfoBanner] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const stickyNav = document.querySelector('.stickyNav');
    if (isOpen) {
      setIsModalContainerOpen(true);
      setIsContactFormOpen(true);
      setIsModalOpen(true);
      setScrollPosition(window.scrollY);
      if(!isMobile) {
        stickyNav?.classList.add('stickyNavNoTransition');
        stickyNav?.classList.add('contactFormOpened');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = "8px"
      }
    } else {
      const timeoutId = setTimeout(() => {
        if(!isMobile) {
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = "0"
          stickyNav?.classList.remove('contactFormOpened');
        }
        window.scrollTo(0, scrollPosition);
      }, 400);

      const timeoutId2 = setTimeout(() => {
        if(!isMobile) {
          stickyNav?.classList.remove('stickyNavNoTransition');
        }
        window.scrollTo(0, scrollPosition);
      }, 500);


  
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutId2);
      };
    }

    return () => {
      0
    };
  }, [isOpen, scrollPosition, isMobile]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    const timeoutId = setTimeout(() => {
      setIsModalContainerOpen(false);
      setFullName('');
      setEmail('');
      setMessage('');
      setFullNameError("");
      setEmailError("");
      setMessageError("");
    }, 800);
    setIsContactFormOpen(false);
    setInfoBanner(false);
    onClose();

    return () => {
      clearTimeout(timeoutId);
    };
  }

  // CONTACT Form Fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (newValue: string) => {
    setFullName(newValue);
    setFullNameError('');
  }

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
    setEmailError('');
  }

  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
    setMessageError('');
  }

  const sendEmail = async () => {
    let hasError = false;

  if (fullName.length < 3) {
    setFullNameError("Name should have minimum 3 characters.");
    hasError = true;
  } else {
    setFullNameError("");
  }


  if (!email) {
    setEmailError("Email can't be empty.");
    hasError = true;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email is not valid.");
      hasError = true;
    } else {
      setEmailError("");
    }
  }


  if (!message) {
    setMessageError("Message can't be empty");
    hasError = true;
  } else {
    setMessageError("");
  }

  if (hasError) {
    // Handle errors or show error messages to the user
    return;
  }

    const data = {
      name: fullName,
      email: email,
      message: message
    };

    try {
      setSending(true);
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsSend(true);
      setIsContactFormOpen(false);
      setInfoBanner(true);
      setSending(false);
      const contactForm = document.getElementById('contact-form');
      const timeoutId = setTimeout(() => {
        if (contactForm) {
          contactForm.style.display = 'none';
        } else {
          console.error('Could not find contactForm element.');
        }
      }, 450);

      return () => {
        clearTimeout(timeoutId);
      };
    } catch (error) {
      setSending(false);
      setIsSend(false);
      setIsContactFormOpen(false);
      setInfoBanner(true);
      const contactForm = document.getElementById('contact-form');
      const timeoutId = setTimeout(() => {
        if (contactForm) {
          contactForm.style.display = 'none';
        } else {
          console.error('Could not find contactForm element.');
        }
      }, 450);

      return () => {
        clearTimeout(timeoutId);
      };
    }
      
  };

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  return (
    <>
      {isModalContainerOpen && (
        <div className={`kontakt-forma modal-overlay ${isModalOpen ? 'modal-visible' : 'modal-hidden'} bg-[rgba(113,113,113,0.2)] dark:bg-[rgba(113,113,113,0.1)] px-[20px] ns:px-[0] py-[20px] ns:py-[50px]`}>
          <div className={`info-banner ${infoBanner ? 'modal-visible' : ''} bg-primaryLight dark:bg-primaryDark`}>
            <div className={`${isSend ? 'bg-[#28D35C]' : 'bg-[#FF4646]'} flex items-center justify-center w-full h-[100px] rounded-[15px]`}>
              {isSend ?
              (
                <svg xmlns="http://www.w3.org/2000/svg" width="34.894" height="30" viewBox="0 0 34.894 30">
                  <path id="Vector_Stroke_" data-name="Vector (Stroke)" d="M33.966,1.467a2.489,2.489,0,0,1,.332,3.5l-20,24.2-.008.005a4.781,4.781,0,0,1-7.463-.142L.566,20.988a2.489,2.489,0,1,1,3.925-3.054l6.129,7.879L30.46,1.8a2.489,2.489,0,0,1,3.5-.332Z" transform="translate(0.026 -0.9)" fill="#fff" fillRule="evenodd"/>
                </svg>
              ):

              (
                <svg id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <path id="Union" d="M3.688,29.447a2.144,2.144,0,0,1-3.03-3.03L12,15.076.658,3.734A2.144,2.144,0,1,1,3.688.7L15.03,12.046,26.371.7a2.144,2.144,0,0,1,3.03,3.03L18.059,15.076,29.4,26.417a2.144,2.144,0,0,1-3.03,3.03L15.03,18.105Z" transform="translate(0.024 -0.022)" fill="#fff" fillRule="evenodd"/>
                </svg>
              )}
            </div>
            <div className='flex flex-col items-center gap-[20px]'>
              <h4 className='text-primaryDark dark:text-primaryLight text-[24px]'>{isSend ? 'Message Launched' : ' Transmission Blocked'}</h4>
              <p className='text-textLight dark:text-textDark'>{isSend ? 'Your message is on its way to me. Expect a reply soon!' : ' Whoops! Something went wrong. Please try again later.'}</p>
            </div>
            <div onClick={handleCloseModal} className='rounded-[15px] flex w-full py-[15px] items-center justify-center text-primaryDark dark:text-primaryLight dark:bg-primaryDark2 bg-primaryLight2 dark:hover:bg-borderDark hover:bg-borderLight cursor-pointer'>
              Close
            </div>
          </div>
          <div id="contact-form" className={`modal ${isContactFormOpen ? 'modal-visible' : 'modal-hidden'} dark:bg-primaryDark bg-primaryLight h-fit`}>
            <div className='flex justify-between'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <path className='dark:fill-primaryLight fill-primaryDark' id="Path_53" data-name="Path 53" d="M39.414,5.414,34.586.586A2,2,0,0,0,33.172,0H6.828A2,2,0,0,0,5.414.586L.586,5.414A2,2,0,0,0,0,6.828V33.172a2,2,0,0,0,.586,1.414l4.828,4.828A2,2,0,0,0,6.828,40H39a1,1,0,0,0,1-1V6.828a2,2,0,0,0-.586-1.414M30,15.586a1,1,0,0,1-.293.707l-3,3a1,1,0,0,0,0,1.414l3,3a1,1,0,0,1,.293.707V29a1,1,0,0,1-1,1H24.414a1,1,0,0,1-.707-.293l-3-3a1,1,0,0,0-1.414,0l-3,3a1,1,0,0,1-.707.293H11a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1h4.586a1,1,0,0,1,.707.293l3,3a1,1,0,0,0,1.414,0l3-3A1,1,0,0,1,24.414,10H29a1,1,0,0,1,1,1Z" fill="#fff"/>
              </svg>
              <div onClick={handleCloseModal} className='dark:bg-primaryDark2 bg-primaryLight2 dark:hover:bg-borderDark hover:bg-borderLight hover:cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-[6px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13.001" height="13.001" viewBox="0 0 13.001 13.001">
                  <g id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math" transform="translate(0.023 -0.022)">
                    <path className='dark:fill-primaryLight fill-primaryDark' id="Union" d="M1.585.272A.929.929,0,0,0,.272,1.585L5.187,6.5.272,11.415a.929.929,0,1,0,1.313,1.313L6.5,7.813l4.915,4.915a.929.929,0,0,0,1.313-1.313L7.813,6.5l4.915-4.915A.929.929,0,0,0,11.415.272L6.5,5.187Z" fill="#fff" fillRule="evenodd"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-[40px]">
            <div className="mb-[60px]">
            <h3 className="dark:text-primaryLight text-primaryDark text-[24px] mb-[20px]">Unleash Creative Opportunities!</h3>
            <p className="text-textLight dark:text-textDark">Open for captivating design and development collaborations – let&apos;s bring visions to life!</p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className='flex flex-col gap-[8px]'>
              <Input
                label="Full Name"
                type="text"
                value={fullName}
                id="fullName"
                onChange={handleFullNameChange}
                isInput={true}
              />
              <div className={`${fullNameError ? 'flex' : 'hidden'} form-error-message`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <g id="Group_705" data-name="Group 705" transform="translate(-257 -41)">
                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="9" cy="9" r="9" transform="translate(257 41)" fill="#f9485c"/>
                    <path id="Union" d="M.843.157A.5.5,0,0,0,.136.864L2.782,3.51.136,6.156a.5.5,0,1,0,.707.707L3.489,4.217,6.135,6.863a.5.5,0,0,0,.707-.707L4.2,3.51,6.842.864A.5.5,0,0,0,6.135.157L3.489,2.8Z" transform="translate(262.524 46.478)" fill="#fff" fillRule="evenodd"/>
                  </g>
                </svg>
                {fullNameError}
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <Input
                label="Email"
                type="text"
                value={email}
                id="email"
                onChange={handleEmailChange}
                isInput={true}
              />
              <div className={`${emailError ? 'flex' : 'hidden'} form-error-message`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <g id="Group_705" data-name="Group 705" transform="translate(-257 -41)">
                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="9" cy="9" r="9" transform="translate(257 41)" fill="#f9485c"/>
                    <path id="Union" d="M.843.157A.5.5,0,0,0,.136.864L2.782,3.51.136,6.156a.5.5,0,1,0,.707.707L3.489,4.217,6.135,6.863a.5.5,0,0,0,.707-.707L4.2,3.51,6.842.864A.5.5,0,0,0,6.135.157L3.489,2.8Z" transform="translate(262.524 46.478)" fill="#fff" fillRule="evenodd"/>
                  </g>
                </svg>
                {emailError}
              </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <Input
                label="Your Message"
                type="text"
                value={message}
                id="message"
                onChange={handleMessageChange}
                isInput={false}
              />
              <div className={`${messageError ? 'flex' : 'hidden'} form-error-message`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <g id="Group_705" data-name="Group 705" transform="translate(-257 -41)">
                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="9" cy="9" r="9" transform="translate(257 41)" fill="#f9485c"/>
                    <path id="Union" d="M.843.157A.5.5,0,0,0,.136.864L2.782,3.51.136,6.156a.5.5,0,1,0,.707.707L3.489,4.217,6.135,6.863a.5.5,0,0,0,.707-.707L4.2,3.51,6.842.864A.5.5,0,0,0,6.135.157L3.489,2.8Z" transform="translate(262.524 46.478)" fill="#fff" fillRule="evenodd"/>
                  </g>
                </svg>
                {messageError}
              </div>
            </div>
          </div>
          <Button
            label={sending ? 'Sending..' : 'Send Message'}
            additionalClass="w-full flex justify-center my-[32px]"
            type="primary"
            onClick={sendEmail}
          />
          <p className="text-textLight dark:text-textDark text-center">Prefer email? <a className="underline dark:text-primaryLight text-primaryDark" href="mailto:hello@kojiado.com">hello@kojiado.com</a></p>
            </div>
          </div>
        </div>
       )}
    </>
  );
};

export default ContactForm