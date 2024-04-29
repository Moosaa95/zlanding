import React from 'react'
import { ArrowLeft, ArrowRight, GrooveBGIcon, GrooveHQIcon, JasonIcon } from '../../assets'

const WorkItems = ({ clientName, clientImage, grooveImage, testimonials, position, location }) => {
    const truncatedClientName = clientName ? `${clientName.substring(0, 6)}` : clientName;
    const truncatedTestimonials = testimonials? `${testimonials.substring(0, 120)}` : testimonials;


    return (
        <div className='flex flex-row justify-between h-[840px] items-center'>
            <div className='flex flex-col mt-16'>
                <h2 className='w-[550px] text-white text-[69px]'>
                    How it worked for {truncatedClientName} <img src={clientImage}/> at <img src={grooveImage} />
                </h2>
                <span className='text-xl text-white'>
                    {truncatedTestimonials}
                </span>
                <div className='flex flex-row items-center w-16 h-16'>
                    <img src={ArrowLeft} alt="Previous" />
                    <img src={ArrowRight} alt="Next" />
                </div>
            </div>
            <div className='ml-[200px] space-y-8'>
                <div className='flex flex-row space-x-3'>
                    <img src={GrooveBGIcon} alt="Groove Background" />
                    <div className='flex flex-col'>
                        <span className='text-xl text-white'>{clientName}</span>
                        <span className='text-gray-500'>{position} at GROOVE</span>
                        <span className='text-gray-500'>{location}</span>
                    </div>
                </div>
                <div>
                    <span className='text-gray-200 text-[22px]'>{testimonials}</span>
                </div>
            </div>
        </div>
    );
};
const Work = () => {
    const clients = [
        {
            clientName: "Jason Makki",
            clientImage: JasonIcon,
            position: "Engineer",
            location: "San Francisco",
            grooveImage: GrooveHQIcon,
            testimonials: "Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters."
        }
    ];

    return (
        <section>
            {clients.map((client, index) => (
                <WorkItems key={index} {...client} />
            ))}
        </section>
    );
};

export default Work
