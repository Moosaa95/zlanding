import React, { useState } from "react";
import { CloseVideoIcon, OpenVideoIcon } from "../../assets"; // Assuming you import this icon as well

const ProcessStep = ({ step }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleStep = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b last:border-b-0">
            <button className="flex items-center py-2 px-4 w-full text-left" onClick={toggleStep}>
                <img src={isOpen ? OpenVideoIcon : step.openVideoIcon} alt={isOpen ? "Close" : "Open"} className="mr-2" />
                <span>{step.title}</span>
            </button>
            {isOpen && (
                <p className="px-4 py-2">{step.paragraph}</p>
            )}
        </div>
    );
};

const Process = ({ title, subTitle }) => {
    const steps = [
        {
            openVideoIcon: CloseVideoIcon,
            paragraph: "",
            title: "Step 1: Resume Screening"
        }
    ]
    return (
        <section className="bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h2 className="text-xl">{subTitle}</h2>
            </div>
            <div className="mt-4">
                <div className="bg-white shadow-md rounded-lg">
                    {steps && steps.map((step, index) => (
                        <ProcessStep key={index} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
