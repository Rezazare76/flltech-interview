import { FC, ReactNode, memo } from "react";
import "./Button.css";
interface guideButtonType {
  setStep: (arg: number) => void;
  step: number;
  text: string;
  back?: boolean;
  icon?: ReactNode;
}
const GuideButton: FC<guideButtonType> = ({
  setStep,
  step,
  text,
  back,
  icon,
}) => {
  return (
    <button
      className={`${
        back ? "back flex-row-reverse" : "next"
      }  flex items-center justify-between bg-primary-100 px-1 text-dark`}
      onClick={() => setStep(back ? --step : ++step)}
    >
      <span>{text}</span>
      <div className="h-full bg-secondary-100 transition-all" />
      {icon}
    </button>
  );
};
export default memo(GuideButton);
