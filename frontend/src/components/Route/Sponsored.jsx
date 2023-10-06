import React from "react";
import styles from "../../styles/styles";



const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/originals/c9/78/0d/c9780d8e639d5e92e5f804a934d73cba.png"
            alt=""
            style={{width:"100px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.freeiconspng.com/uploads/johnnie-walker-icon-2.jpg"
            style={{width:"100px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/originals/7a/94/68/7a94687d18b2a926f3a12402f4503cf1.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/12/Bacardi-Logo.png"
            style={{width:"200px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/04/Burlington-Logo.png"
            style={{width:"200px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
