import React, { useState } from "react";
import { CloseVideoIcon, OpenVideoIcon, UserProtraitIcon } from "../../assets"; // Assuming you import this icon as well

const ProcessStep = ({ step }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStep = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-4 mb-2 last:border-b">
      <button
        className="flex items-center py-2 px-4 w-full text-left"
        onClick={toggleStep}
      >
        <img
          src={isOpen ? OpenVideoIcon : step.openVideoIcon}
          alt={isOpen ? "Close" : "Open"}
          className="mr-2"
        />
        <span>{step.title}</span>
      </button>
      {isOpen && <p className="px-4 py-2">{step.paragraph}</p>}
    </div>
  );
};

const Process = ({ title, subTitle }) => {
  const steps = [
    {
      openVideoIcon: CloseVideoIcon,
      paragraph: "",
      title: "Step 1: Resume Screening",
    },
    {
      openVideoIcon: CloseVideoIcon,
      paragraph:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
      title: "Step 2: Video Interview",
    },
    {
      openVideoIcon: CloseVideoIcon,
      paragraph: "",
      title: "Step 3: Technical Evaluation",
    },
    {
      openVideoIcon: CloseVideoIcon,
      paragraph: "",
      title: "Step 4: Application Review",
    },
    {
      openVideoIcon: CloseVideoIcon,
      paragraph: "",
      title: "Step 5: Lets get to work",
    },
  ];
  return (
    <section className="p-4">
      <div className="flex flex-col w-[650px]">
        <h1 className="text-[64px] font-switzer">{title}</h1>
        <h2 className="text-[32px] font-[300]">{subTitle}</h2>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="mt-4 flex flex-col">
          <div className="shadow-md rounded-lg w-[630px]">
            {steps &&
              steps.map((step, index) => (
                <ProcessStep key={index} step={step} />
              ))}
          </div>
        </div>
        <div className="flex flex-col items-start mr-32">
          <div className="relative">
            <div className="absolute -top-[240px] -right-20 z-30">
              <img src={UserProtraitIcon} alt="User Portrait" />
            </div>
            <div className="border shadow-md p-6 w-[423px]">
              <div className="flex" >
                <div className="border w-16 bg-[#8BA4FD] rounded-lg p-6 flex flex-col items-center space-y-8">
                  <div className="flex items-center justify-center border border-white rounded-full h-8 w-8 text-white font-bold">
                    1
                  </div>
                  <div className="flex items-center justify-center border border-gray-200 rounded-full h-8 w-8 text-gray-200 font-bold">
                    2
                  </div>
                  <div className="flex items-center justify-center border border-gray-200 rounded-full h-8 w-8 text-gray-200 font-bold">
                    3
                  </div>
                  <div className="flex items-center justify-center border border-gray-200 rounded-full h-8 w-8 text-gray-200 font-bold">
                    4
                  </div>
                  <div className="flex items-center justify-center border border-gray-200 rounded-full h-8 w-8 text-gray-200 font-bold">
                    5
                  </div>
                </div>
                {/* Questions container */}
                <div className="flex flex-col justify-between ml-4 p-2 rounded-lg">
                  <div>Tell us something about yourself</div>
                  <div>Give a short brief about your experience</div>
                  <div>Explain about good customer experience</div>
                  <div>How to manage SOP of customers care?</div>
                  <div>
                  Tell us something about yourself
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
