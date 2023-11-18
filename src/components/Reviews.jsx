import React from "react";
import Heading from "../layout/Heading";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";
import img4 from "../assets/images/pic6.png";
import ReviewCard from "../layout/ReviewCard";


const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5 text-center ">
      <Heading title1="Participating" title2="members" />

      <div className=" flex flex-col md:flex-row gap-5 mt-10">
        <ReviewCard 
         img={img1} 
         text="Salwae" text1=" Himdi" rating={4}/>
         
        <ReviewCard 
        img={img2} 
        text="Yassin" text1=" Lachheb" rating={3}/>
        <ReviewCard 
        img={img3} 
        text="Ayoub" text1=" Elkoumi" rating={3}/>
        <ReviewCard 
        img={img4}
         text="Samira" text1=" Bassit" rating={2}/>
      </div>
    </div>
  );
};

export default Reviews;
