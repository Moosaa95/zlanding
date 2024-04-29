import React from "react";
import { ExploreMoreIcon, GroupOneDashIcon, GroupOneIcon } from "../../assets";


const WhyCard = ({ cardTitle, cardItems, bg_image }) => {
  return (
    <div className="flex justify-between w-[1300px] h-[652px] space-x-11 shadow-md border border-white bg-white rounded-lg p-14">
      <div>
        <h1 className="text-[52px] font-semibold">{cardTitle}</h1>

        {cardItems &&
          cardItems.map((item) => (
            <div>
              <div className="flex flex-row items-center space-x-4">
                <img src={item.icon} alt="" />
                <span className="text-[20px] font-switzerLight">{item.text}</span>
              </div>
            </div>
          ))}
        <div className="flex flex-row space-x-4 mt-6 items-center">
          <img src={ExploreMoreIcon} alt="" />
          <span className="text-[22px] font-switzerLight font-semibold">Learn More</span>
        </div>
      </div>
      <div>
        <img src={bg_image} alt="" />
      </div>
    </div>
  );
};

const Why = ({ title, text }) => {
  return (
    <section className="slider-container">

      <div className="flex flex-row space-x-14">
        <div className="flex flex-col mr-24 w-[550px]">
          <h1 className="text-[64px]  font-bold">{title}</h1>
          <h4>{text}</h4>
        </div>
        
        <div className="flex flex-row space-x-5">
          <WhyCard
            cardTitle="Onboard without the risk."
            cardItems={[
              {
                icon: GroupOneDashIcon,
                text: "We pick the best for you to select.",
              },
              {
                icon: GroupOneDashIcon,
                text: "Thousands of vetted candidates in dozens of categories.",
              },
              {
                icon: GroupOneDashIcon,
                text: "Risk-free resource swapping for the best fit.",
              },
            ]}
            bg_image={GroupOneIcon}
          />
          <WhyCard
            cardTitle="Onboard without the risk."
            cardItems={[
              {
                icon: GroupOneDashIcon,
                text: "We pick the best for you to select.",
              },
              {
                icon: GroupOneDashIcon,
                text: "Thousands of vetted candidates in dozens of categories.",
              },
              {
                icon: GroupOneDashIcon,
                text: "Risk-free resource swapping for the best fit.",
              },
            ]}
            bg_image={GroupOneIcon}
          />
        </div>

      </div>
      {/* progress bar in black color */}
      <div className="flex items-center justify-center mt-8">
      <div className="w-[40%]  bg-white h-2">
        <div className="bg-black h-2" style={{ width: `30%` }}></div>
      </div>
      </div>
    </section>
  );
};

export default Why;
