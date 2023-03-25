import React from "react";
import css from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* upper elements */}
        <div  className={css.upperElements}>
          <span className="primaryText">
            Hey There,
            <br />
            I'm Yash.
          </span>
          <span className="secondaryText">
            I design beautiful simple
            <br />
            things, And I love what i do.
          </span>
        </div>

        <div className={css.person}>
            <img src="./person.png" alt="" />
        </div>


        <a className={css.email} href="mailto:yashhans479@gmail.com">
        yashhans479@gmail.com
        </a>

        {/* lower content div */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="certificate" />
            <span>CERTIFIED PROFASSIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
