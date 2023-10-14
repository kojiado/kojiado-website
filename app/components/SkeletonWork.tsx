import React from 'react'

const SkeletonWork = () => {
  return (
    <div className='flex flex-col sm:flex-row rounded-[20px] work p-0 bg-[#FAFAFA] dark:bg-[#171717] w-full mx-auto'>
      <div className='skeleton aspect-[16/10] sm:aspect-[3/4] sm:max-w-[300px] w-full'>
      </div>
      <div className='flex flex-1 flex-col gap-[20px] p-[30px] sm:p-[40px] justify-center'>
        <div className='h-[30px] w-[172px] rounded-full skeleton'>
        </div>
        <h3 className='skeleton h-[36px] w-[260px] rounded-full'></h3>
        <div className='flex flex-col gap-[8px] w-full'>
          <div className='skeleton h-[16px] rounded-full w-full'></div>
          <div className='skeleton h-[16px] rounded-full w-full'></div>
        </div>
        <div className='flex gap-[6px] items-center'>
          <div className='skeleton h-[16px] w-[100px] rounded-full'></div>
          <div className='skeleton h-[16px] w-[16px] rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonWork