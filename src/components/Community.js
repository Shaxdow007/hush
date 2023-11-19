import React from "react";
import serviceOne from "../assets/serviceOne.png";
import serviceTwo from "../assets/serviceTwo.png";
import SecondaryBtn from "./SecondaryBtn";
const Community = () => {
  return (
    <section id="community" className="mt-12 bg-bgDark">
      <div className="container mx-auto p-4">
        {/* box community 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img src={serviceOne} alt="serviceOne" />
          <div>
            <h5 className="first-letter:capitalize text-whiteColor text-[40px] lg:text-[60px] font-semibold">
              easy and effortless way to connect with your team
            </h5>
            <p className="first-letter:capitalize my-6 text-white40 font-medium text-[16px] leading-[32px]">
              with hush you can easily connect with you team in a different
              <br className="hidden md:block" /> fields, you can create manage
              and edit what ever you want <br className="hidden md:blcok" />
              inside the channel. create as many as you want.
            </p>
            <SecondaryBtn title={"learn more about hush"} />
          </div>
        </div>
        {/* box community 2 */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <img className="hidden md:block" src={serviceTwo} alt="serviceOne" />
          <div>
            <h5 className="first-letter:capitalize text-whiteColor text-[40px] lg:text-[60px] font-semibold">
              tons of <br className="hidden md:block" /> supportive community <br className="hidden md:block" />you can discover
            </h5>
            <p className="first-letter:capitalize my-6 text-white40 font-medium text-[16px] leading-[32px]">
              search any type and field of community you want by searching
              <br className="hidden md:block" /> on the search page you can
              discover tons of supportive
              <br className="hidden md:block" /> community that will help you
              with your work.
            </p>
            <SecondaryBtn title={"explore the communities"} />
          </div>
          <img className="block md:hidden" src={serviceTwo} alt="serviceOne" />
        </div>
        {/* box community 3 */}
        <div className="join-box my-8 text-center p-6 rounded-[32px]">
          <h6 className="text-whiteColor text-[30px] md:text-[60px] font-bold">
            Join thousands <br className="hidden md:block" />
            creative teams on Hush
          </h6>
          <p className="my-6 text-white40 font-medium text-[16px] leading-[32px]">
            with cude, you can build your app or website faster than before.
            featured with an awesome <br className="hidden md:block" /> things
            inside that will help you in your design process.
          </p>
          <SecondaryBtn title={"download for MacOS"} />
        </div>
      </div>
    </section>
  );
};

export default Community;
