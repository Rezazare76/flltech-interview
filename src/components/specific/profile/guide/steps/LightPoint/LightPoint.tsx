import { memo, useEffect, useState, FC } from "react";
import "./LightPoint.css";
import { guideDescription } from "../../data";
interface lightPoint {
  step: number;
  stepData: any;
}
const LightPoint: FC<lightPoint> = ({ step, stepData }) => {
  const [positions, setPositions] = useState<any>();
  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById(stepData[step]);
      const parent = document.getElementById("menu-container");
      if (parent) {
        if (step < 3) parent.scrollTop = 0;
        else element?.scrollIntoView();
        const rect = element?.getBoundingClientRect();
        setPositions(rect);
      }
    }, 150);
  }, [step, stepData]);
  return (
    <section
      className={`LightPoint  fixed rounded transition-all `}
      style={{
        width: positions?.width,
        height: positions?.height,
        left: positions?.left || "-100px",
        top: positions?.top || "-100px",
      }}
    >
      <div
        className="scale-up absolute h-full w-full rounded"
        // onClick={(event) => {}}
      />
      <div
        className="point absolute rounded bg-primary-100 text-center text-dark-100"
        style={{
          top: step < 3 && positions?.height + 10,
          bottom: step >= 3 && positions?.height + 10,
          right: step === 1 && positions?.width,
          left:
            step !== 1 ? (positions?.width < 50 ? positions?.width : 50) : "",
        }}
      >
        <h3 className="mb-2 font-bold">{stepData[step]}</h3>
        {/* <LanguageMessage message={`guide-${stepData[step]}`} /> */}
        <p className="text-sm text-secondary-300">
          {guideDescription[stepData[step] as keyof typeof guideDescription]}
        </p>
      </div>
    </section>
  );
};
export default memo(LightPoint);
