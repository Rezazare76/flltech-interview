import { FC, useEffect, useState } from "react";
import GuideButton from "./button/Button";
import Welcome from "./steps/welcome/Welcome";
import LightPoint from "./steps/LightPoint/LightPoint";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import "./style.scss";
const stepData = ["welcome", "changeTheme", "dashboard"];
interface guideProp {
  setShow: (arg: boolean) => void;
}
const Guide: FC<guideProp> = ({ setShow }) => {
  const [userGuide, setUserGuide] = useState<boolean>(
    !!localStorage.getItem("guide") || false,
  ); // 用户当前步
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= 2) setShow(true);
    else setShow(false);
  }, [step]);

  if (!userGuide)
    return (
      <main className="guide">
        {step === 0 ? (
          <Welcome />
        ) : (
          <LightPoint step={step} stepData={stepData} />
        )}
        <div className="cover fixed h-full w-full " />

        <div
          className="control move-to-top fixed bottom-0 left-0 z-[8] flex w-full 
      items-center  justify-between rounded-t bg-primary-400 p-3"
        >
          {!!step && (
            <GuideButton
              text="back"
              step={step}
              setStep={setStep}
              back={true}
              icon={<RiArrowLeftLine />}
            />
          )}
          {step === 0 && (
            <span
              className="skip m-0 cursor-pointer rounded-sm bg-primary-100 px-5 py-1 text-dark"
              onClick={() => {
                setUserGuide(true);
                localStorage.setItem("guide", "true");
              }}
            >
              skip
            </span>
          )}
          {step === 2 && (
            <span
              className="skip m-0 cursor-pointer rounded-sm bg-primary-100 px-5 py-1 text-dark"
              onClick={() => {
                setUserGuide(true);
                localStorage.setItem("guide", "true");
              }}
            >
              Welcome
            </span>
          )}
          {step < 2 && (
            <GuideButton
              text="next"
              step={step}
              setStep={setStep}
              icon={<RiArrowRightLine />}
            />
          )}
        </div>
      </main>
    );
};
export default Guide;
