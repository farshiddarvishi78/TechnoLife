"use client"


import { useState } from "react"
import { useSwiper } from "swiper/react"

const Swipernavbtn = () =>{
const swiper = useSwiper()
const [activeSlide , SetactiveSlide] = useState(0)
const totalSlides = swiper.slides.length
const handlePrev = () => {
    swiper.slidePrev()
    SetactiveSlide(swiper.realIndex)
}

const handleNext = () =>{
    swiper.slideNext()
    SetactiveSlide(swiper.realIndex)
}
return(
    
<div className="  bottom-15 right-15 z-1 flex m-[-60px] gap-3 absolute group  h-[350px] w-full ">
    <div className=" w-[55px] h-[55px]  mt-[245px] mr-[30px]">
<button className="cursor-pointer opacity-0 group-hover:opacity-100" onClick={() => swiper.slidePrev()}>
    <svg className="w-[80px] h-[80px] rotate-90 zoom-60">
<path 
d="M40 5 Q45 5 48 12 L73 58 Q80 72 65 72 H15 Q0 72 7 58 L32 12 Q35 5 40 5Z"
fill="white"
/>
<path
d="M32 43 L40 35 L48 43"
fill="none"
stroke="#222"
strokeWidth="3.5"
strokeLinecap="round"
strokeLinejoin="round"
 />

    </svg>
</button>
 </div>
 <div className="w-[55px] h-[55px] mr-[10px] mt-[245px]">
<button className="cursor-pointer opacity-0 group-hover:opacity-100   "  onClick={() => swiper.slideNext()}>
    
        <svg className="w-[80px] h-[80px] rotate-90 scale-y-[-1] zoom-60 ">
<path 
d="M40 5 Q45 5 48 12 L73 58 Q80 72 65 72 H15 Q0 72 7 58 L32 12 Q35 5 40 5Z"
fill="white"
/>
<path
d="M32 43 L40 35 L48 43"
fill="none"
stroke="#222"
strokeWidth="3.5"
strokeLinecap="round"
strokeLinejoin="round"
 />
    </svg>
</button>
 </div>


</div>
)


}
export default Swipernavbtn