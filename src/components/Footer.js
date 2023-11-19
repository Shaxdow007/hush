import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
  const product = ["updates", "downloads", "bata test", "pricing product"];
  const support = ["help center", "account information", "about", "contact us"];
  const helpSolution = [
    "talk to support",
    "support docs",
    "system status",
    "covid responde",
  ];
  return (
    <footer className="mt-24">
      <div className="container mx-auto p-4 border-t border-darkBlue32">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* footer box1 */}
          <div>
            {/* <img src={Logo} alt="hushLogo" /> */}
            <h1 className="text-darkBlue text-[32px] font-bold">Hush</h1>
            <p className="text-darkBlue32">
              A team messaging app for everyone to
              <br className="hidden md:block" /> connect with theier team.
            </p>
          </div>
          {/* footer box2 */}
          <div>
            <h6 className="mb-4 capitalize text-[16px] md:text-[20px] font-light">
              product
            </h6>
            {product.map((item, index) => (
              <ul key={index}>
                <li className="py-2">
                  <a
                    className="capitalize text-darkBlue32 hover:text-darkBlue duration-300 ease-in"
                    href={item}
                  >
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </div>
          {/* footer box3 */}
          <div>
            <h6 className="mb-4 capitalize text-[16px] md:text-[20px] font-light">
              support
            </h6>
            {support.map((item, index) => (
              <ul key={index}>
                <li className="py-2">
                  <a
                    className="capitalize text-darkBlue32 hover:text-darkBlue duration-300 ease-in"
                    href={item}
                  >
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </div>
          {/* footer box4 */}
          <div>
            <h6 className="mb-4 capitalize text-[16px] md:text-[20px] font-light">
              help and solutions
            </h6>
            {helpSolution.map((item, index) => (
              <ul key={index}>
                <li className="py-2">
                  <a
                    className="capitalize text-darkBlue32 hover:text-darkBlue duration-300 ease-in"
                    href={item}
                  >
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        {/* copyright */}
        <div className="my-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-darkBlue32 capitalize">&copy; by shadow, copyright and all rights reserved.</p>
          <p className="text-darkBlue32 capitalize">terms and conditions - privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
