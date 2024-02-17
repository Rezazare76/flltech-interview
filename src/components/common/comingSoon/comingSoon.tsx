import style from "./style.module.scss";
export const ComingSoon = () => {
  return (
    <div className={`${style.comingSoon} h-full w-full   px-6 py-6 sm:px-10`}>
      <div className="flex h-full w-full items-center justify-center rounded-sm bg-slate-50 dark:bg-dark-100">
        <div
          className={`${style.loadingText} loadingText text-center text-xl text-dark text-transparent sm:text-5xl ml:text-7xl`}
          style={{ animationIterationCount: "infinite" }}
        >
          <span data-text="C">C</span>
          <span data-text="O">O</span>
          <span data-text="M">M</span>
          <span data-text="I">I</span>
          <span data-text="N">N</span>
          <span data-text="G">G</span>
          <span data-text="S">S</span>
          <span data-text="O">O</span>
          <span data-text="O">O</span>
          <span data-text="N">N</span>
        </div>
      </div>
    </div>
  );
};
