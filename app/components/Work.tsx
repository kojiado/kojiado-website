import React from 'react'
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

interface WorkProps {
  service: string;
  name: string;
  description: string;
  caseStudy?: string;
  githubRepo?: string;
  livePreview?: string;
  thumbnail_mobile: string;
  thumbnail_desktop: string;
}

const Work: React.FC<WorkProps> = ({service,name,description,caseStudy,githubRepo,thumbnail_desktop,thumbnail_mobile,livePreview}) => {
  const arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="13.994" height="12" viewBox="0 0 13.994 12"><path class="dark:fill-primaryLight fill-primaryDark" id="arrow-right-solid" d="M13.7,70.631a1,1,0,0,0,0-1.415l-5-5a1,1,0,0,0-1.415,1.415l3.3,3.292H1a1,1,0,1,0,0,2H10.58L7.291,74.217a1,1,0,0,0,1.415,1.415l5-5Z" transform="translate(0 -63.925)" fill="#fff"/></svg>'

  return (
    <div className='flex flex-col sm:flex-row border-[1px] border-solid border-borderLight dark:border-borderDark rounded-[20px] work p-0 bg-[#FAFAFA] dark:bg-[#171717]'>
      <div className='sm:min-h-[400px] work-image aspect-[16/10] sm:aspect-[3/4] sm:max-w-[300px]'>
        <Image alt={name} width="800" height="1067" className='w-full hidden sm:block' src={thumbnail_desktop}/>
        <Image alt={name} width="800" height="1067" className='w-full block sm:hidden' src={thumbnail_mobile}/>
      </div>
      <div className='flex flex-1 flex-col gap-[20px] p-[30px] sm:p-[40px] justify-center'>
        <p className='bg-[#EDEDED] dark:bg-borderDark text-primaryDark dark:text-primaryLight p-[6px_12px] rounded-[8px] text-[12px] tracking-[2px] uppercase w-fit font-semibold'>{service}</p>
        <h3 className='text-primaryDark dark:text-primaryLight text-[24px] leading-[36px]'>{name}</h3>
        <p className='text-textLight dark:text-textDark'>{description}</p>
        <div className='flex gap-[16px]'>
          {caseStudy && 
            <a target='_blank' href={caseStudy} className={`button tertiary`}>
              Case Study
              <span
                dangerouslySetInnerHTML={{ __html: arrow }}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              />
            </a>
          }
          {githubRepo && 
            <a target='_blank' href={githubRepo} className={`button tertiary`}>
              Github Repo
              <span
                dangerouslySetInnerHTML={{ __html: arrow }}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              />
            </a>
          }
          {livePreview && 
            <a target='_blank' href={livePreview} className={`button tertiary`}>
              Live Preview
              <span
                dangerouslySetInnerHTML={{ __html: arrow }}
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default Work