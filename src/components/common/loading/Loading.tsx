import { FC } from "react";
import { ClassNameType } from "types/common";
export const Loading: FC<ClassNameType> = ({ className }) => {
  return (
    <section className={`${className} loading `}>
      <div className="h-[100px] w-[100px] rounded-full border-b border-primary dark:border-white" />
    </section>
  );
};
