import { Sparkles } from "components/common/sparkles/Sparkles";
import style from "./style.module.scss";
import { memo } from "react";
import logo from "assets/images/logo.svg";
const Welcome = () => {
  return (
    <>
      <section
        className={`${style.guideWelcome} fixed left-0 top-0 z-[6] flex
    h-full w-full  flex-col items-center justify-center bg-black`}
      >
        <div
          className={`${style.Text}  loadingText text-center  text-xl sm:text-7xl dark:text-transparent`}
        >
          <span data-text="W">W</span>
          <span data-text="E">E</span>
          <span data-text="L">L</span>
          <span data-text="C">C</span>
          <span data-text="O">O</span>
          <span data-text="M">M</span>
          <span data-text="E">E</span>
          <span data-text="T">T</span>
          <span data-text="O">O</span>
        </div>
        <img src={logo} className={`${style.sparkles}`} />

        <div className={`${style.borderLine}  relative `}>
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"></div>
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"></div>
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
          <div className="h-full w-full opacity-0" style={{ opacity: 1 }}></div>
        </div>
        <div className={`${style.sparkles} h-[100px] w-[400px]`}>
          <Sparkles
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
      </section>
    </>
  );
};
export default memo(Welcome);
