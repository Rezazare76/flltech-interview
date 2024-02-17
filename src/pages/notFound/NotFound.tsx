import { Button } from "components";
import notFound from "assets/images/404.jpg";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    sessionStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center ">
      <img src={notFound} width="50%" />
      <Button
        className="pulse-danger w-[216px] rounded-xs bg-secondary-100 px-12 py-2 text-center text-white"
        text="Back To Home"
        onClick={handleExit}
      />
    </section>
  );
};

export default NotFound;
