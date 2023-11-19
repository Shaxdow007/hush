import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import HeroImg from "../assets/heroImg.png";
const Hero = () => {
  return (
    <section id="home" className="home my-8">
      <div className="container mx-auto p-4">
        <div className="text-center capitalize text-whiteColor">
          <h1 className="font-bold text-[65px] md:text-[96px] leading-[110px]">
            connect with <br className="hidden md:block" /> your team
          </h1>

          <p className="my-6 text-white40 font-medium text-[16px] leading-[32px]">
            hush is a messaging app for your team that will helps you to{" "}
            <br className="hidden md:block" /> connect with everyone in a easy
            and comfortable way <br className="hidden md:block" /> possible
          </p>
          <PrimaryBtn title="download for macOs" />
          <div className="hidden lg:block my-12">
            <div className="w-full">
              <img
                src={HeroImg}
                alt="heroImg"
                className="w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
