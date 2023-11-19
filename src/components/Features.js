import React from "react";
import brand1 from "../assets/brandOne.png";
import brand2 from "../assets/brandTwo.png";
import brand3 from "../assets/brandThree.png";
import brand4 from "../assets/brandFour.png";
import messageIcon from "../assets/messageIcon.png";
import communityIcon from "../assets/communityIcon.png";
import exploreIcon from "../assets/exploreIcon.png";
import Card from "./Card";
const Features = () => {
  const cards = [
    {
      img: messageIcon,
      title: "easy communication",
      parag:
        "easy and simple way to communicate with your team and friends, build with awesome features with it.",
    },
    {
      img: communityIcon,
      title: "community support",
      parag:
        "a creative and qick way to get feedbacks and support in your team or community, just send the work and the rest will follow.",
    },
    {
      img: exploreIcon,
      title: "discover channel",
      parag:
        "discover new channels you interest in, meet with new people around the world and make more connections",
    },
  ];
  return (
    <section id="features" className="mt-12">
      <div className="container mx-auto p-4">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 capitalise text-darkBlue/50 font-medium text-[16px] leading-[32px]">
            our collaboration with famos companys
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={brand4} alt="brands" className="mx-auto" />
            </div>
            <div>
              <img src={brand1} alt="brands" className="mx-auto" />
            </div>
            <div>
              <img src={brand2} alt="brands" className="mx-auto" />
            </div>
            <div>
              <img src={brand3} alt="brands" className="mx-auto" />
            </div>
          </div>
        </div>
        {/* box 2 */}
        <div className="text-center my-12">
          <h2 className="text-[40px] md:text-[60px] font-semibold leading-[78px]">
            Some of our features <br className="hidden md:block" /> that will
            help you
          </h2>
          <p className="my-4 text-darkBlue/50 font-medium text-[16px] leading-[32px]">
            With cude, you can bulid your app or website faster than before.
            Featured with an <br className="hidden md:block" /> awesome things
            inside that will help you in your design process.
          </p>
        </div>
        {/*  box 3 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              parag={card.parag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
