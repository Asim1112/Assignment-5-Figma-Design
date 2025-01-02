import React from 'react';
import Image from "next/image";


const page = () => {
  return (
    <div>
      
          
          
          {/* Hero Section */}
          <div>
            <Image src="/Hero-section.jpg" alt="banner-image" width={1920} height={829}/>
          </div>
          
          
          
          {/* Main-Content */}
          <div>
            <Image src="/Work-management.svg" alt="content-image" width={1920} height={1588}/>
            <Image src="/Footer.svg" alt="content-image" width={1921} height={759}/>
            <Image src="/Customise it to your needs.svg" alt="content-image" width={1921} height={812.09}/>
            <Image src="/Pricing.svg" alt="content-image" width={1921} height={1272}/>
            <Image src="/Your-Work.svg" alt="content-image" width={1921} height={574}/>
            <Image src="/Your data.svg" alt="content-image" width={1921} height={661.13}/>
            <Image src="/Our sponsors.svg" alt="content-image" width={1922} height={538}/>
            <Image src="/Apps.svg" alt="content-image" width={1920} height={750.8}/>
            <Image src="/Testimonial.svg" alt="content-image" width={1919} height={994.46}/>
            <Image src="/Free Trial.svg" alt="content-image" width={1919} height={994.46}/>

          </div>
    </div>
  )
}

export default page