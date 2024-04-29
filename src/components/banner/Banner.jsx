import React from 'react';

const Banner = ({ bannerTextBefore, bannerTextAfter, imagePath, subBannerText }) => {
  return (
    <section className="text-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-switzer mb-2 text-black flex flex-col justify-center items-center space-y-2">
          <div className="flex justify-center items-center">
            {bannerTextBefore}
            {imagePath && (
              <img src={imagePath} alt="Decorative Icon" className="inline-block mx-2 w-8 h-8 rounded-full" />
            )}
          </div>
          <div>
            {bannerTextAfter}
          </div>
        </h2>
        <h4 className="text-xl text-gray-600 pt-8">{subBannerText}</h4>
      </div>
    </section>
  )
}

export default Banner;
