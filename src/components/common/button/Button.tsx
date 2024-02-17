import { FC, MouseEvent } from "react";
import ButtonProps from "./type";
import { RiRefreshLine, RiErrorWarningLine } from "@remixicon/react";
export const Button: FC<ButtonProps> = ({
  className,
  text,
  icon,
  onClick,
  disabled,
  loading,
  loadingClass,
  error,
  errorClass,
  type,
  form,
}) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick?.(e);
  };
  return (
    <button
      className={`${className} ${
        disabled && "bg-gradient-0 cursor-not-allowed bg-secondary-300"
      } ${error && errorClass} relative`}
      value={text}
      onClick={(e) => handleClick(e)}
      disabled={disabled}
      style={{ backgroundImage: disabled ? "unset" : " " }}
      type={type}
      form={form}
    >
      {icon}
      {text}
      {loading && (
        <RiRefreshLine
          size={16}
          className={` ${loadingClass} loading absolute left-[8px] top-[32%] z-[2] translate-x-[-50%] translate-y-[-50%]`}
        />
      )}
      {error && (
        <RiErrorWarningLine
          size={16}
          className={`absolute end-[16px] top-[50%] z-[1] translate-x-[-50%] translate-y-[-50%] text-danger`}
        />
      )}
    </button>
  );
};
Button.defaultProps = {
  className:
    "bg-gradient-to-b from-primary-200 to-primary-500 text-white rounded-sm py-2 px-12",
};
