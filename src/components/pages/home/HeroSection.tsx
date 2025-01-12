import React from "react";
import CommonButton from "../../common/CommonButton";
import HeroImage from "../../../assets/images/hero.svg";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center gap-5 justify-center md:justify-between min-h-[calc(100dvh-96px)]">
      <div className="space-y-4 pl-3 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold !leading-tight tracking-tight">
          The Fast and Easy <br />
          Way to Share Content
        </h1>
        <p className="text-base sm:text-lg">
          Instantly Share Your Ideas, Notes, and Messages with Ease
        </p>
        <CommonButton
          link="note"
          text="Get Started"
          className="!py-3 !px-6 !mt-8"
        />
      </div>
      <div className="hidden md:block max-w-[400px] xl:max-w-[600px]">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
