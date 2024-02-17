import DarkSwitch from "components/common/darkSwitch/DarkSwitch";
import notifyIcon from "assets/images/icons/notification.svg";
import profileIcon from "assets/images/profile.svg";
export const MenuTools = () => {
  return (
    <div className="flex items-center  gap-5 sm:gap-10">
      <DarkSwitch />
      <img
        src={notifyIcon}
        className="drop-shadow"
        alt="notify-icon"
        width={24}
        height={24}
      />
      <div className="flex items-center gap-2">
        <img src={profileIcon} alt="profile-image" width={32} height={32} />
        <span className="text-[15px]">Profile</span>
      </div>
    </div>
  );
};
