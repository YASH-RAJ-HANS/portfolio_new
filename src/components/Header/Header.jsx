import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall,BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Yash Raj Hans</div>
        <ul
        style={getMenuStyles(menuOpened)} 
        className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.number}`}>
            <p>(+091)6200134722</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div className={css.menuIcon} onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Header

// export default Header