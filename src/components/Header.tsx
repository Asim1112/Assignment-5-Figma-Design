import React from 'react'
import Image from "next/image"

const Header = () => {
  return (
    <div>
        
        <div className='flex flex-row justify-between items-center px-[220px] py-4 absolute w-[1920px] h-[92px] top-0 left-0  bg-customBlue text-white'>
            
             {/* Logo and Text section */}
            
            <div className="flex items-center gap-2">
                
                <div>
                <Image src="/images/logo icon.png" alt='Logo image' width={25} height={25}/>
                </div>
            
                <div className='font-inter font-bold text-[28px] leading-[34px]'>whitepace</div>

            </div>
            
            
            {/* Navigation Links */}
            <div className='flex flex-row items-start p-0 gap-10 w-[551.5px] h-[24px] ml-[400px]'>
                
                <div className='cursor-pointer flex items-center gap-4'>Products<Image src="/images/Vector.png" alt="vector-image" width={9} height={4}/></div>
                <div className='cursor-pointer flex items-center gap-4'>Solutions<Image src="/images/Vector.png" alt="vector-image" width={9} height={4}/></div>
                <div className='cursor-pointer flex items-center gap-4'>Resources<Image src="/images/Vector.png" alt="vector-image" width={9} height={4}/></div>
                <div className='cursor-pointer flex items-center gap-4'>Pricing<Image src="/images/Vector.png" alt="vector-image" width={9} height={4}/></div>

            </div>
                
                {/* Buttons */}
                <div className="flex items-center gap-5">
                
                <div className="flex flex-row justify-center items-center px-6 py-4 gap-2 w-[126px] h-[60px] bg-[#ffe492] text-customBlue rounded-lg">
                <button><b>Login</b></button>
                </div>

                <div className="flex flex-row justify-center items-center px-6 py-4 gap-2 w-[227px] h-[60px] bg-[#4f9cf9] rounded-lg">
                <button className="flex items-center gap-8">Try Whitepace Free<Image src="/images/arrow.png" alt="arrow-image" width={5} height={10}/></button>
                </div>
                
            
            </div>
</div>
            
</div>
  )
}

export default Header
