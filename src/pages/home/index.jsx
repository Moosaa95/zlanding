import React from "react";
import Banner from "../../components/banner/Banner";
import { ApproIcon, Union, User } from "../../assets";
import Search from "../../components/search/Search";
import Services from "../../components/services/Services";
import MarketPlace from "../../components/marketplace/MarketPlace";
import Work from "../../components/howitwork/Work";
import Process from "../../components/process/Process";
import Journey from "../../components/journey/Journey";
import Why from "../../components/why/Why";
import Faq from "../../components/faq/Faq";

const Home = () => {
  return (
    <div className="w-screen">
      <section className="bg-[#808080]">
        <div className="container mx-auto px-4 py-12">
          <Banner
            bannerTextBefore="Finding the right fit"
            bannerTextAfter="has never been easier."
            imagePath={User}
            subBannerText="Explore your potential with our courses and community"
          />
          <Search />
          <Services
            first_service_title="IT & Development"
            second_service_title="Design and Creative"
          />
        </div>
      </section>
      <img src={Union} alt="union" className="w-full" />

      <section className="bg-[#EDEFFF]" >
        <div className="container mx-auto px-4 py-12" >
          <MarketPlace marketHeaderTitle="Your one-stop marketplace for finding the talent your business needs" />
        </div>
      </section>
      
      <section className="relative bg-[#202229]">
        {" "}
        <div className="container mx-auto px-4 py-12">
          <Work />
        </div>
        <img
          src={ApproIcon}
          alt="Descriptive Alt Text"
          className="absolute top-0 right-16 mt-2 mr-2 w-[221px] h-[175px]"
        />{" "}
      </section>
      <section className="bg-[#EDEFFF]">
        <div className="container mx-auto px-4 py-12">
          <Process title="How we ensure you’re in good hands." subTitle="With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days." />
        </div>
      </section>
      <section className="bg-[#808080]">
        <div className="container mx-auto px-4 py-12">
          <Journey />
        </div>
      </section>
      <section className="bg-[#808080]">
        <div className="container mx-auto px-4 py-12">
          <Why title="Why choose Zwilt?" text="We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool." />
        </div>
      </section>
      <section className="bg-[#F3F3F3]">
        <div className="container mx-auto px-4 py-12">
          <Faq />
        </div>
      </section>
    </div>
  );
};

export default Home;
