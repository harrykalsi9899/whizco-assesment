import Image from "next/image";
import React from "react";
import s from "./Details.module.scss";

const Details = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2>
          {" "}
          <span>Free</span> Instagram engagement Rate Calculator
        </h2>
        <p>
          Try our free Engagement Rate Calculatorto find out the engagement of
          any Instagram account
        </p>

        <div className={s.searchBar}>
          <input type="text"></input>
          <button> Check</button>
        </div>

        <div className={s.profileCards}>
          <div className={s.profile}>
            <div className={s.upperHalf}>
              <div className={s.rating}>Good ER</div>
              <div className={s.profilePic}>
                <Image
                  src="/images/dp.png"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                  quality={100}
                  alt="meddoLogo"
                />
              </div>
              <div className={s.instaText}>
                <div className={s.insta}>
                  <Image
                    src="/images/insta.png"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                    quality={100}
                    alt="twitter"
                  />
                </div>
                <div className={s.userName}>kalsi__harpreet</div>
              </div>
              <div className={s.infoContainer}>
                <div className={s.info}>
                  <p>1.1M</p>
                  <span>Followers</span>
                </div>
                <div className={s.info}>
                  <p>31.2k</p>
                  <span>Likes</span>
                </div>
                <div className={s.info}>
                  <p>200</p>
                  <span>Comments</span>
                </div>
              </div>
            </div>
            <div className={s.secondHalf}>
              <h5>Engagement Rate</h5>
              <div className={s.twitter}>
                <Image
                  src="/images/twitter.png"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                  quality={100}
                  alt="twitter"
                />
              </div>
              <div className={s.linkedin}>
                <Image
                  src="/images/linkedin.png"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                  quality={100}
                  alt="linkedin"
                />
              </div>
              <hr className={s.line}></hr>
              <h1>2.87%</h1>
              <p>
                {" "}
                To get full report! <span> Login</span>
              </p>
            </div>
          </div>
          <div className={s.profile}>
            <div className={s.upperHalf}>
              <div className={s.average}>Average ER</div>
              <div className={s.profilePic}>
                <Image
                  src="/images/dp.png"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                  quality={100}
                  alt="meddoLogo"
                />
              </div>
              <div className={s.instaText}>
                <div className={s.insta}>
                  <Image
                    src="/images/insta.png"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                    quality={100}
                    alt="twitter"
                  />
                </div>
                <div className={s.userName}>salmonBhai</div>
              </div>
              <div className={s.infoContainer}>
                <div className={s.info}>
                  <p>1.1M</p>
                  <span>Followers</span>
                </div>
                <div className={s.info}>
                  <p>31.2k</p>
                  <span>Likes</span>
                </div>
                <div className={s.info}>
                  <p>200</p>
                  <span>Comments</span>
                </div>
              </div>
            </div>
            <div className={s.secondHalf}>
              <h5>Engagement Rate</h5>
              <div className={s.twitter}>
                <Image
                  src="/images/twitter.png"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                  quality={100}
                  alt="twitter"
                />
              </div>
              <div className={s.linkedin}>
                <Image
                  src="/images/linkedin.png"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                  quality={100}
                  alt="linkedin"
                />
              </div>
              <hr className={s.line}></hr>
              <h1>1.82%</h1>
              <p>
                {" "}
                To get full report! <span> Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
