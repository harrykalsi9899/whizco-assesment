import s from "./Header.module.scss";

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.logo}>Whizco</div>
        <div className={s.navLinks}>
          <ul> Home</ul>
          <ul> Creators</ul>
          <ul> My Campaign</ul>
          <div className={s.imageContainer}>
            <Image
              src="/images/dp.png"
              layout="fill"
              objectFit="contain"
              priority={true}
              quality={100}
              alt="meddoLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
