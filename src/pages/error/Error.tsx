import { Button } from "components";
import error from "assets/images/error.gif";

const ErrorPage = () => {
  const handleExit = () => {
    sessionStorage.removeItem("userToken");
    window.location.href = "/";
  };
  return (
    <section className="flex h-full items-center justify-center text-primary-500 ">
      <div className="flex flex-col items-center ">
        <img src={error} alt="error.png" />
        <div className="flex flex-wrap items-center gap-3">
          <Button
            className="bg-primary-700 pulse-danger w-[216px] rounded-xs bg-secondary-100 px-12 py-2 text-center text-white "
            text="Back to Home"
            onClick={handleExit}
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
