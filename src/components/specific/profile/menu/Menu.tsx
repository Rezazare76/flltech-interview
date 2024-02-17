import { Suspense, lazy, memo, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { menuList } from "./data";
import { Button, MenuTools } from "components";
import { RiUser2Fill, RiMenu2Fill } from "@remixicon/react";
import { useSWRConfig } from "swr";
import logo from "assets/images/logo.svg";
import arrow from "assets/images/icons/arrow.svg";
import "./style.scss";
import Guide from "components/specific/profile/guide/Guide";

export const ProfileMenu = memo(() => {
  const { mutate } = useSWRConfig();
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [sub, setSub] = useState<undefined | number>(undefined);
  const handleExit = () => {
    sessionStorage.removeItem("userToken");
    navigate("/authentication/login");
    mutate(() => true, undefined, { revalidate: false });
  };
  const handleMenuClick = (elm: any, inx: number) => {
    if (!elm.sub) setIsOpen(false);
    setSub(inx);
    navigate(elm.path);
  };

  return (
    <>
      <aside
        className="sticky top-0 z-[1] flex select-none flex-row items-center  justify-between
        overflow-visible border-r border-primary-300 bg-primary-100 p-5
    md:relative md:w-[330px] md:flex-col md:overflow-hidden md:px-0 
     dark:border-primary-400  dark:bg-dark-200"
      >
        <div className="menu-sun  absolute hidden md:block" />
        <div className="hidden w-full items-center justify-center md:flex   md:py-2">
          <img
            src={logo}
            onClick={() => navigate("/")}
            className="cursor-pointer drop-shadow"
            width={150}
            height={40}
            draggable={false}
          />
        </div>
        <div
          className={`md:rounded-r-0 fixed top-0 z-[1000] flex h-[100%] w-[280px] flex-grow  flex-col overflow-y-auto
        overflow-x-hidden  rounded-r-lg bg-white transition-all  md:static md:h-auto md:w-full md:flex-row md:items-start md:justify-center
        md:bg-transparent  max-md:dark:bg-dark-100 ${
          isOpen ? "end-0" : "end-[-300px]"
        }`}
          dir="rtl"
          id="menu-container"
        >
          <div className="text-tertiary-100 mt-8 flex flex-col items-center justify-between md:hidden ">
            <div className="bg-tertiary-100 rounded-full py-3 md:ml-2">
              <RiUser2Fill className="w-[48px] text-primary-300 md:w-[40px]" />
            </div>
            <span className="my-2">reza zare</span>
          </div>
          <ul
            className="mt-8 flex w-full flex-col 
            items-center  justify-center  "
            dir="ltr"
          >
            {menuList.map((elm, inx) => (
              <li
                key={elm.name}
                className="w-full cursor-pointer"
                onClick={() => handleMenuClick(elm, inx)}
              >
                <div className="px-3">
                  <div
                    className={`text-tertiary-100  flex w-full  items-center justify-between gap-3.5
                rounded-sm px-5 py-3 
                ${
                  inx == 0
                    ? location == elm.path &&
                      "bg-primary-300 text-white dark:bg-primary-400"
                    : location.includes(elm.path) &&
                      "bg-primary-300 text-white dark:bg-primary-400"
                }  `}
                    id={elm?.id}
                  >
                    <div className="flex items-center  gap-3.5">
                      <img
                        className="cursor-pointer drop-shadow "
                        src={elm.icon}
                        width={25}
                        height={25}
                        alt={elm.name}
                        draggable={false}
                      />

                      <span className={`text-[17px]  dark:text-primary-300`}>
                        {elm.name}
                      </span>
                    </div>

                    {elm.sub && (
                      <i
                        className={`transition-all ${
                          sub == inx
                            ? "rotate-0"
                            : "rotate-180  hover:rotate-90"
                        } `}
                      >
                        <img
                          src={arrow}
                          width={24}
                          height={24}
                          alt="arrow-icon"
                          className="drop-shadow"
                        />
                      </i>
                    )}
                  </div>
                </div>

                <ul
                  className={`relative ml-1.5 mt-3 
                flex flex-col gap-3 border-l-2  border-primary-400 pl-1 pr-3 transition-all ${
                  sub == inx && elm.sub ? "left-0" : "left-[-100px]"
                } overflow-hidden`}
                >
                  {sub == inx &&
                    menuList[sub] &&
                    menuList[sub].sub?.map((subMenu, inx) => (
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(subMenu.path);
                          setIsOpen(false);
                        }}
                        className={`rounded-sm px-5 py-3 ${
                          location.includes(subMenu.path) &&
                          "bg-secondary-100 text-primary-100 dark:text-dark"
                        } `}
                        key={`sub-menu-${inx}`}
                      >
                        {subMenu.name}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && (
          <div
            className={`bg-tertiary-200 fixed left-0 top-0 z-10 h-screen w-screen bg-opacity-50`}
            onClick={() => setIsOpen(false)}
          />
        )}
        <RiMenu2Fill
          size={38}
          className="text-tertiary-100 block md:hidden "
          onClick={() => setIsOpen(true)}
        />
        <div className="block md:hidden">
          {window.innerWidth < 768 && <MenuTools />}
        </div>
      </aside>
      <Guide setShow={setIsOpen} />
    </>
  );
});
