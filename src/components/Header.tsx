import React from 'react'
import Image from "next/image"
import { GoChevronDown , GoArrowRight } from "react-icons/go";

const Header = () => {
  return (
    <div>
        
        <div className='flex flex-row justify-between items-center px-[220px] py-4 absolute w-[1920px] h-[92px] top-0 left-0  bg-customBlue text-white'>
            
             {/* Logo and Text section */}
            
            <div className="flex items-center gap-2">
                
                <div>
                <Image src="/Logo Icon.svg" alt='Logo image' width={25} height={25}/>
                </div>
            
                <div className='font-inter font-bold text-[28px] leading-[34px]'>whitepace</div>

            </div>
            
            
            {/* Navigation Links */}
            <div className='flex flex-row items-start p-0 gap-10 w-[551.5px] h-[24px] ml-[400px]'>
                
                <div className='cursor-pointer flex items-center gap-4'>Products<GoChevronDown/></div>
                <div className='cursor-pointer flex items-center gap-4'>Solutions<GoChevronDown/></div>
                <div className='cursor-pointer flex items-center gap-4'>Resources<GoChevronDown/></div>
                <div className='cursor-pointer flex items-center gap-4'>Pricing<GoChevronDown/></div>

            </div>
                
                {/* Buttons */}
                <div className="flex items-center gap-5">
                
                <div className="flex flex-row justify-center items-center px-6 py-4 gap-2 w-[126px] h-[60px] bg-[#ffe492] text-customBlue rounded-lg">
                <button><b>Login</b></button>
                </div>

                <div className="flex items-center px-4 w-[227px] h-[60px] bg-[#4f9cf9] rounded-lg">
                <button className="flex items-center gap-2 font-medium text-[16px] pl-2">Try Whitepace Free<GoArrowRight/></button>
                </div>
                
            
            </div>
</div>
            
</div>
  )
}

export default Header
