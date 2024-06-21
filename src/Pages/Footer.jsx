import React from "react";
import { NavLink } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styles from "../Styles/foot.module.css";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useToast } from "@chakra-ui/react";

const Footer = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Sorry",
      description: "Work in progress.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top",
    })
  }

  return (
    <div style={{ backgroundColor:'#0f0617', marginTop: '2rem'}}>
      <hr />
      {/* top div for imges & links  */}
      <div className={styles.flex}>
        <div className={styles.flex}>
          <p>Download apps</p>
          <img
            width="123px"
            height="37"
            src="https://www.zee5.com/images/play_store.png?ver=2.51.65"
            alt="playstore"
          />
          <img
            width="123px"
            height="37"
            src="https://www.zee5.com/images/app_store.png?ver=2.51.65"
            alt="applestore"
          />
        </div>
        <div className={styles.flex}>
          <p>Connect with us</p>
          <FaFacebookSquare />
          <RiInstagramFill />
          <FaTwitter />
          <GrYoutube />
        </div>
      </div>
      {/* 2nd box  */}
      <div className={styles.link}>
        <Breadcrumb separator="|">
          <BreadcrumbItem>
            <BreadcrumbLink onClick={showToast}>About us</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink onClick={showToast}>Help Center</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink onClick={showToast}>Privacy Policy</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink onClick={showToast}>Terms of Use</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
      </div>
      {/* 3rd div  */}
      <div className={styles.contents}>
        <div>
          <p>Populat TVShows</p>
          <div>
            <NavLink to="/dummylink">Kumkum Bhagya</NavLink>
          </div>
          <div>
            {" "}
            <NavLink to="/dummylink">Kundali Bhagya</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Bhagya Lakshmi</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Tujhse Hai Rabta</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Kyun Riston me Khatti Batti</NavLink>
          </div>
        </div>
        <div>
          <p>Premium Movies</p>
          <div>
            <NavLink to="/dummylink">Kya Meri Sonam Gupta Bewafa Hai ?</NavLink>
          </div>
          <div>
            {" "}
            <NavLink to="/dummylink">Helmet</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">200 Halla Ho</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">14 Phere</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Dial 100</NavLink>
          </div>
        </div>
        <div>
          <p>Popular LIVE TV Channels</p>
          <div>
            <NavLink to="/dummylink">Ajj Tak</NavLink>
          </div>
          <div>
            {" "}
            <NavLink to="/dummylink"> Zee News</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Zee Tv HD</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">&TV HD</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Zee Marathi HD</NavLink>
          </div>
        </div>
        <div>
          <p>Popular Web Series</p>
          <div>
            <NavLink to="/dummylink">Sunflower</NavLink>
          </div>
          <div>
            {" "}
            <NavLink to="/dummylink">Jeet Ki Zid</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Bichoo Ka Khel</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">State of Seige</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Naxalbari</NavLink>
          </div>
        </div>
        <div>
          <p>Bollywood Top Celebrities</p>
          <div>
            <NavLink to="/dummylink">Suuny Leone</NavLink>
          </div>
          <div>
            {" "}
            <NavLink to="/dummylink">Disha patani</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Deepika Padukone</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Salman Khan</NavLink>
          </div>
          <div>
            <NavLink to="/dummylink">Nora Fatehi</NavLink>
          </div>
        </div>
      </div>
      <div className={styles.cright}>
        <div>
          <p>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </p>
        </div>
        <div>
          <p>
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Footer;