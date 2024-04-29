import React from "react";
import {
  BgCardIcon,
  BgCardOneIcon,
  BgThreeIcon,
  ExploreMoreIcon,
  OneIcon,
  ThreeIcon,
  TwoIcon,
} from "../../assets";

const JourneyItems = ({
  title,
  bg_color,
  number,
  header,
  text,
  type,
  images,
}) => {
  return (
    <section className="flex justify-center items-center flex-col space-y-5">
      <h1 className="text-4xl font-switzer text-center">{title}</h1>

      <div
        className={`flex flex-row justify-between p-10 border shadow-sm ${bg_color} h-[387px] w-[1300px] overflow-hidden`}
        style={{ clipPath: "polygon(0 14%, 100% 2%, 100% 88%, 0% 100%)" }}
      >
        {/* items */}
        <div className="flex flex-row space-x-5 pt-6">
          <div>
            <img src={number} alt="Number Icon" />
          </div>
          <div className="flex flex-col w-[350px] space-y-5">
            <h2 className="text-4xl font-semibold">{header}</h2>
            <h4>{text}</h4>
            <div className="flex flex-row items-center space-x-4">
              <img
                src={ExploreMoreIcon}
                className="w-10 h-10"
                alt="Explore Icon"
              />
              <span>{type}</span>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="grid grid-cols-2 gap-4">
          {images &&
            images.map((image, index) => (
              <div
                key={index}
                className="border shadow-sm rounded-lg overflow-hidden w-[220px] h-[247px] flex flex-col"
              >
                <div
                  className={`flex-1 bg-cover bg-center`}
                  style={{
                    backgroundImage: `url(${image.image})`,
                    backgroundColor: image.bg,
                  }}
                ></div>
                <div className="flex-1 p-2 flex flex-col justify-around">
                  <h3 className="text-lg font-semibold">{image.clientName}</h3>
                  <span>{image.description}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  return (
    <>
      <JourneyItems
        title="Start your journey today."
        header="Find your next star performer."
        number={OneIcon}
        bg_color="bg-[#EDEFFF]"
        text="Explore the vast Zwilt marketplace to find the candidate that meets your needs."
        type="Join Now"
        images={[
          {
            image: BgCardIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#ffdace",
          },
          {
            image: BgCardOneIcon,
            clientName: "System ops engineer",
            description: "Abu Dhabi, UAE 5 years experience",
            bg: "#c8efc4",
          },
          {
            image: BgThreeIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#d8d2ff",
          },
          {
            image: BgThreeIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#fddd8b",
          },
        ]}
      />
      <JourneyItems
        header="Evaluate to your heart’s content."
        number={TwoIcon}
        bg_color="bg-[#fff7e1]"
        text="Assess the candidate through work history, transparent tests and video interviews."
        type="Browse More"
        images={[
          {
            image: BgCardIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#ffdace",
          },
          {
            image: BgCardOneIcon,
            clientName: "System ops engineer",
            description: "Abu Dhabi, UAE 5 years experience",
            bg: "#c8efc4",
          },
          {
            image: BgThreeIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#d8d2ff",
          },
          {
            image: BgThreeIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#fddd8b",
          },
        ]}
      />
      <JourneyItems
        header="Start building your team."
        number={ThreeIcon}
        bg_color="bg-[#f3f3f3]"
        text="Onboard your candidate right away and start creating the next big thing."
        type="Join Now"
        images={[
          {
            image: BgCardIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#ffdace",
          },
          {
            image: BgCardOneIcon,
            clientName: "System ops engineer",
            description: "Abu Dhabi, UAE 5 years experience",
            bg: "#c8efc4",
          },
          {
            image: BgThreeIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#d8d2ff",
          },
          {
            image: BgThreeIcon,
            clientName: "Ruby Developer",
            description: "Redwood City, California 7 years experience",
            bg: "#fddd8b",
          },
        ]}
      />
    </>
  );
};
export default Journey;
