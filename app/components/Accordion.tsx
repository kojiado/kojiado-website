import React, {ReactNode, useState} from 'react'

interface AccordionProps {
  number: String;
  title: String;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({number,title,children}) => {
  const [open, setOpen] = useState(false);
  
  let toggleHandler = (e) => {
    setOpen(!open);
  };

  return (
    <div className="accordion__item">
      <div onClick={toggleHandler} className="accordion__header flex justify-between items-center">
        <div className='flex items-center gap-[20px]'>
          <span className='text-[16px] font-extrabold block rounded-full p-[6px_12px] bg-borderLight text-primaryDark dark:bg-borderDark dark:text-primaryLight'>{number}</span>
          <h4 className='text-primaryDark dark:text-primaryLight'>{title}</h4>
        </div>
        <div className='expand-more-icon'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6562 6.34326L6.34254 17.657L17.6562 6.34326Z" fill="#121212"/>
            <path d="M17.6562 6.34326L6.34254 17.657" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.37891 6.30859L17.6926 17.6223L6.37891 6.30859Z" fill="#121212"/>
            <path d="M6.37891 6.30859L17.6926 17.6223" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="accordion__content">
        {children}
      </div>
    </div>
  )
}

export default Accordion