import { useState } from "react";

import Modal from "./Modal";
import classes from "./Slide.module.css";

function Slide() {
  const [modal, setModal] = useState(false);
  const [slide, setSlide] = useState(1);
  const [tab, setTab] = useState(1);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  const changeTab = (e) => {
    if (e.keyCode === 37) {
      setTab(1);
    }
    if (e.keyCode === 39) {
      setTab(2);
    }
  };

  const prevSlideHandler = (e) => {
    if (slide > 1) {
      setSlide((prev) => prev - 1);
    } else if (slide === 1) {
      setSlide(3);
    }
  };

  const nextSlideHandler = (e) => {
    if (slide < 3) {
      setSlide((prev) => parseInt(prev) + 1);
    } else if (slide === 3) {
      setSlide(1);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.hero}>
          <img
            src="/images/mobile-image-hero-1.jpg"
            alt="image 1"
            className={classes.mobile}
            hidden={slide === 1 ? false : true}
          />
          <img
            src="/images/desktop-image-hero-1.jpg"
            alt="image 1"
            className={classes.desktop}
            hidden={slide === 1 ? false : true}
          />
          <img
            src="/images/mobile-image-hero-2.jpg"
            alt="image 2"
            className={classes.mobile}
            hidden={slide === 2 ? false : true}
          />
          <img
            src="/images/desktop-image-hero-2.jpg"
            alt="image 2"
            className={classes.desktop}
            hidden={slide === 2 ? false : true}
          />
          <img
            src="/images/mobile-image-hero-3.jpg"
            alt="image 3"
            className={classes.mobile}
            hidden={slide === 3 ? false : true}
          />
          <img
            src="/images/desktop-image-hero-3.jpg"
            alt="image 3"
            className={classes.desktop}
            hidden={slide === 3 ? false : true}
          />
          <img
            src="/images/icon-hamburger.svg"
            alt="hamburger icon"
            className={classes.hamburger}
            onClick={modalHandler}
          />
          <img src="/images/logo.svg" alt="logo" className={classes.logo} />
          <ul className={classes.menu}>
            <li>
              <a href="#">home</a>
              <div className={classes.line}></div>
            </li>
            <li>
              <a href="#">shop</a>
              <div className={classes.line}></div>
            </li>
            <li>
              <a href="#">about</a>
              <div className={classes.line}></div>
            </li>
            <li>
              <a href="#">contact</a>
              <div className={classes.line}></div>
            </li>
          </ul>
          <div
            className={classes.actions}
            onKeyDown={changeTab}
            role="tablist"
            aria-label="slider"
          >
            <button
              className={classes.left}
              role="tab"
              onClick={prevSlideHandler}
              tabIndex={tab === 1 ? 0 : -1}
              aria-selected={tab === 1 ? "true" : "false"}
              aria-controls="previous-slide"
            >
              <img src="/images/icon-angle-left.svg" alt="angle left icon" />
            </button>
            <button
              className={classes.right}
              role="tab"
              onClick={nextSlideHandler}
              tabIndex={tab === 2 ? 0 : -1}
              aria-selected={tab === 2 ? "true" : "false"}
              aria-controls="next-slide"
            >
              <img src="/images/icon-angle-right.svg" alt="angle right icon" />
            </button>
          </div>
        </div>

        <div className={classes.info}>
          <div
            role="tabpanel"
            id="slide-one"
            tabIndex="0"
            hidden={slide === 1 ? false : true}
          >
            <h2>Discover innovative ways to decorate</h2>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
          </div>
          {/* <h2 hidden={slide === 1 ? false : true}>
            Discover innovative ways to decorate
          </h2>
          <p hidden={slide === 1 ? false : true}>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p> */}
          <div
            role="tabpanel"
            id="slide-two"
            tabIndex="0"
            hidden={slide === 2 ? false : true}
          >
            <h2>We are available all across the globe</h2>
            <p>
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </p>
          </div>
          {/* <h2 hidden={slide === 2 ? false : true}>
            We are available all across the globe
          </h2>
          <p hidden={slide === 2 ? false : true}>
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p> */}
          <div
            role="tabpanel"
            id="slide-three"
            tabIndex="0"
            hidden={slide === 3 ? false : true}
          >
            <h2>Manufactured with the best materials</h2>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
          </div>
          {/* <h2 hidden={slide === 3 ? false : true}>
            Manufactured with the best materials
          </h2>
          <p hidden={slide === 3 ? false : true}>
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p> */}
          <a href="#" className={classes.shop}>
            <p>Shop now</p>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </a>
        </div>
      </div>
      {modal && <Modal modalHandler={modalHandler} />}
    </>
  );
}

export default Slide;
