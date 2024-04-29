import React from 'react'

const Services = ({first_service_title, second_service_title}) => {
  return (
    <div className='border border-white border-b-2 bg-gray-100 rounded-lg w-[920px] h-[250px] mt-4 mx-auto mb-4'>
        <div className='flex flex-col items-center justify-center'>
            {/* service header */}
            <div  className='flex items-center justify-center space-x-4 m-6'>
                <div className='border bg-green-200 p-3 rounded-xl'>
                    <a href="" className='font-semibold p-3'>{first_service_title}</a>
                </div>
                <div>
                    <a href="">{second_service_title}</a>
                </div>
            </div>
            <div className='flex items-center justify-evenly w-full'>
                {/* one */}
                <ul className='space-y-2'>
                    <li>  <a href='#' className='font-switzerLight'>Python Developer </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Shopify Developer </a></li>
                    <li>  <a href='#' className='text-gray-900 font-switzer'>MERN Stack Developer </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Full Stack Developer </a></li>
                </ul>
                <ul className='space-y-2'>
                    <li>  <a href='#' className='font-switzerLight'>Data Scientist </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Front End Developer </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Shopify Developer </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Python Developer </a></li>
                </ul>
                <ul className='space-y-2'>
                    <li>  <a href='#' className='font-switzerLight'>Shopify Developer </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Python Developer </a></li>
                    <li>  <a href='#' className='font-switzerLight'>Full Stack Developer </a></li>
                    <li>  <a href='#' className='font-switzer'>Explore more </a></li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Services
