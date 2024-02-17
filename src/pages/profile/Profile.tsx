import { Outlet, useLocation } from "react-router-dom";
import { ProfileMenu, MenuTools } from "components";
import { useEffect } from "react";
import { urlData } from "./data";

const Profile = () => {
  const location = useLocation();

  return (
    <main className="flex h-dvh flex-col md:flex-row  dark:bg-dark">
      <ProfileMenu />
      <section className="bg-tertiary-200 flex h-full w-full flex-col overflow-auto ">
        <header
          className="hidden w-full items-center justify-between  border-b
         border-primary-300 px-11 py-[22px] md:flex dark:border-primary-400 dark:bg-dark-200"
        >
          <span className="font-bold text-[26px]">
            {urlData[location.pathname as keyof typeof urlData]}
          </span>
          <MenuTools />
        </header>
        <Outlet />
      </section>
    </main>
  );
};

export default Profile;
