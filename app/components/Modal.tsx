import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModalContainerOpen, setIsModalContainerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsModalContainerOpen(true);
      setIsModalOpen(true);
      setScrollPosition(window.scrollY);
      if(!isMobile) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = "8px"
      }
    } else {

      const timeoutId = setTimeout(() => {
        if(!isMobile) {
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = "0"
        }
        window.scrollTo(0, scrollPosition);
      }, 400);
  
      return () => {
        clearTimeout(timeoutId);
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
    }, 800);
    onClose();

    return () => {
      clearTimeout(timeoutId);
    };
  }

  return (
    <>
      {isModalContainerOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'modal-visible' : 'modal-hidden'} bg-[rgba(113,113,113,0.2)] dark:bg-[rgba(113,113,113,0.1)] px-[20px] ns:px-[0] py-[20px] ns:py-[50px]`}>
          <div className={`modal ${isModalOpen ? 'modal-visible' : 'modal-hidden'} dark:bg-primaryDark bg-primaryLight h-fit`}>
            <div className='flex justify-between'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <path className='dark:fill-primaryLight fill-primaryDark' id="Path_53" data-name="Path 53" d="M39.414,5.414,34.586.586A2,2,0,0,0,33.172,0H6.828A2,2,0,0,0,5.414.586L.586,5.414A2,2,0,0,0,0,6.828V33.172a2,2,0,0,0,.586,1.414l4.828,4.828A2,2,0,0,0,6.828,40H39a1,1,0,0,0,1-1V6.828a2,2,0,0,0-.586-1.414M30,15.586a1,1,0,0,1-.293.707l-3,3a1,1,0,0,0,0,1.414l3,3a1,1,0,0,1,.293.707V29a1,1,0,0,1-1,1H24.414a1,1,0,0,1-.707-.293l-3-3a1,1,0,0,0-1.414,0l-3,3a1,1,0,0,1-.707.293H11a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1h4.586a1,1,0,0,1,.707.293l3,3a1,1,0,0,0,1.414,0l3-3A1,1,0,0,1,24.414,10H29a1,1,0,0,1,1,1Z" fill="#fff"/>
              </svg>
              <div onClick={handleCloseModal} className='dark:bg-borderDark bg-borderLight dark:hover:bg-[#4A4A4A] hover:bg-[#C4C3C3] hover:cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-[6px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13.001" height="13.001" viewBox="0 0 13.001 13.001">
                  <g id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math" transform="translate(0.023 -0.022)">
                    <path className='dark:fill-primaryLight fill-primaryDark' id="Union" d="M1.585.272A.929.929,0,0,0,.272,1.585L5.187,6.5.272,11.415a.929.929,0,1,0,1.313,1.313L6.5,7.813l4.915,4.915a.929.929,0,0,0,1.313-1.313L7.813,6.5l4.915-4.915A.929.929,0,0,0,11.415.272L6.5,5.187Z" fill="#fff" fillRule="evenodd"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-[40px]">
              {children}
            </div>
          </div>
        </div>
       )}
    </>
  );
};

export default Modal;