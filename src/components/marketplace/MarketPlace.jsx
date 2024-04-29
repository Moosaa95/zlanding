import React from "react";
import { ArrowLeft, ArrowRight, CategoryIcon, Cinema, Data, Dot, ExploreMoreIcon, Graphics, Illustration, Magneto, ProfileIcon, Shopify, SkillIcon, UX, Unreal, Webflow } from "../../assets";

const ItemContainer = ({ title, types, boxTitle, skills, arrowType }) => (
  <>
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
            {types && types.map((type, index) => (
                <div key={index} className="flex items-center space-x-3">
                    <img src={type.icon} alt={type.type_name} className="h-5 w-5" />
                    <span className="text-sm">{type.type_name}</span>
                </div>
            ))}
        </div>

      </div>
      <div className="flex flex-col border shadow-md border-white bg-white rounded-lg p-4 w-[730px] mt-10">
        <h3 className="mb-4 font-bold">{boxTitle}</h3>
        <div className="flex items-center">
          {arrowType === 'left' && <Arrow icon={ArrowLeft} />}
          {skills && skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-4">
              <img src={skill.box_icon} alt={skill.skill_type} className="h-[90px] w-[90px]" />
              <h3 className="text-center text-sm w-20">{skill.skill_type}</h3>
            </div>
          ))}
          {arrowType === 'right' && <Arrow icon={ArrowRight} />}
        </div>
      </div>
    </div>
  </>
);

const Arrow = ({ icon }) => (
  <img src={icon} className="h-[90px] w-[90px] mx-4" />
);

const MarketPlace = ({ marketHeaderTitle }) => {
  const first_one = [
    { icon: SkillIcon, type_name: "989 Skills" },
    { icon: CategoryIcon, type_name: "45 Sub-Categories" },
    { icon: ProfileIcon, type_name: "1011 Profiles" },
  ];

  const skillItems = [
    { box_icon: Shopify, skill_type: "Shopify Developer" },
    { box_icon: Magneto, skill_type: "Magneto Developer" },
    { box_icon: Data, skill_type: "Data Scientist" },
    { box_icon: Webflow, skill_type: "Webflow Developer" },
    { box_icon: Dot, skill_type: "Dot Net Developer" },
  ];

  const skillItemsTwo = [
    { box_icon: UX, skill_type: "UX Designer" },
    { box_icon: Graphics, skill_type: "Graphics Designer" },
    { box_icon: Illustration, skill_type: "Illustration Artist" },
    { box_icon: Unreal, skill_type: "Unreal Engine" },
    { box_icon: Cinema, skill_type: "Cinema 4D" },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="text-3xl font-light italic text-center w-[750px] my-6">
        <h3>{marketHeaderTitle}</h3>
      </div>
      <ItemContainer
        types={first_one}
        title="Find Dev and IT professionals to scale your business."
        boxTitle="IT & Development"
        skills={skillItems}
        arrowType="right"
      />
      <ItemContainer
        types={first_one}
        title="Find Dev and IT professionals to scale your business."
        boxTitle="IT & Development"
        skills={skillItemsTwo}
        arrowType="left"
      />
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-row items-center space-x-6">
            <img src={ExploreMoreIcon} alt="Explore more" />
            <h4 className="font-bold text-[18px]">Explore More</h4>
        </div>
        <div className="mr-[560px]">
            <h4 className="text-[20px]"><span className="font-bold">30 more </span> to explore</h4>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
