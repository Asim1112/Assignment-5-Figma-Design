import React from 'react';
import Image from "next/image";


const page = () => {
  return (
    <div>
      
          
          
          {/* Hero Section */}
          <div>
            <Image src="/images/Hero-section.jpg" alt="banner-image" width={1920} height={829}/>
          </div>
          
          
          
          {/* Main-Content */}
          <div>
            <Image src="images/Work-management.svg" alt="content-image" width={1920} height={1588}/>
            <Image src="/images/Footer.svg" alt="content-image" width={1921} height={759}/>
            <Image src="/images/Customise it to your needs.svg" alt="content-image" width={1921} height={812.09}/>
            <Image src="/images/Pricing.svg" alt="content-image" width={1921} height={1272}/>
            <Image src="/images/Your-Work.svg" alt="content-image" width={1921} height={574}/>
            <Image src="/images/Your data.svg" alt="content-image" width={1921} height={661.13}/>
            <Image src="/images/Our sponsors.svg" alt="content-image" width={1922} height={538}/>
            <Image src="/images/Apps.svg" alt="content-image" width={1920} height={750.8}/>
            <Image src="/images/Testimonial.svg" alt="content-image" width={1919} height={994.46}/>
            <Image src="/images/Free Trial.svg" alt="content-image" width={1919} height={994.46}/>

          </div>
    </div>
  )
}

export default page