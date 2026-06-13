import { ArrowRight } from "lucide-react";

import heroDesktop
  from "../../assets/images/hero_model.png";

import heroMobile
  from "../../assets/images/hero_modelPhone.png";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import Button from "../ui/Button";

const Hero = () => {

  const subtitleRef = useRef();

  const titleRef = useRef();

  const descRef = useRef();

  const buttonRef = useRef();

  const desktopImageRef = useRef();

  const mobileImageRef = useRef();

  useEffect(() => {

    const tl = gsap.timeline();

    // IMAGE ANIMATION
    tl.from(
      [
        desktopImageRef.current,
        mobileImageRef.current,
      ],
      {
        scale: 1.1,
        duration: 1.8,
        ease: "power2.out",
      }
    )

      // SUBTITLE
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=1.4"
      )

      // TITLE
      .from(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )

      // DESCRIPTION
      .from(
        descRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )

      // BUTTON
      .fromTo(
        buttonRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )

  }, []);

  return (
    <section
      className="
        relative
        w-full
        h-screen
        overflow-hidden
      "
    >

      {/* DESKTOP IMAGE */}
      <img
        ref={desktopImageRef}
        src={heroDesktop}
        alt="Fashion Model"
        className="
        hidden md:block absolute inset-0 w-full h-full object-cover
        "
      />

      {/* MOBILE IMAGE */}
      <img
        ref={mobileImageRef}
        src={heroMobile}
        alt="Fashion Model"
        className="
       block md:hidden absolute inset-0 w-full h-full object-cover
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
          md:bg-black/20
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          h-full
          max-w-7xl
          mx-auto
          flex
          items-center
          px-5
          sm:px-8
          lg:px-16
        "
      >

        <div
          className="
            max-w-2xl
            pt-28
            md:pt-0
          "
        >

          {/* SUBTITLE */}
          <p
            ref={subtitleRef}
            className="
              uppercase
              tracking-[4px]
              text-[11px]
              sm:text-sm
              text-white/80
              mb-4
            "
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Urban Edition
          </p>

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-8xl
              leading-tight
              text-white
              mb-5
            "
            style={{
              fontFamily: "Satoshi-Bold",
            }}
          >
            Jackets For <br />
            The Modern Man
          </h1>

          {/* DESCRIPTION */}
          <p
            ref={descRef}
            className="
              text-white/70
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              md:leading-8
              max-w-lg
              mb-8
            "
            style={{
              fontFamily: "Satoshi",
            }}
          >
            Discover premium fashion essentials
            crafted for modern streetwear culture
            and timeless minimal aesthetics.
          </p>

          {/* BUTTON */}
          <button ref={buttonRef}
            className=" 
          px-6 sm:px-8 py-3 sm:py-4 bg-white text-black flex items-center gap-3 hover:bg-black hover:text-white border border-white transition-all duration-300 text-sm sm:text-base 
           will-change-transform
          "
            style={{ fontFamily: "Montserrat" }}
          >
            Discover Now
            <ArrowRight
              size={18}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;