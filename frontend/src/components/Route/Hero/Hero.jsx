import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={` relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/04/15/12/21/led-liquor-shelves-723715_1280.jpg)",
    backgroundSize:'100% 105%',
    backgroundAttachment:"scroll"
  }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[25%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[43px] text-[#2c59f9] font-[400] capitalize mb-10`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[13px] font-[Poppins] font-[400] text-[#31b4edba] mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 ml-10`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
