import { FC } from "react";
import LoadingProps from "./type";
export const Loading: FC<LoadingProps> = ({ ClassName }) => {
  return (
    <section className={`${ClassName} loading `}>
      <div className="h-[100px] w-[100px] rounded-full border-b border-primary dark:border-white" />
    </section>
  );
};
