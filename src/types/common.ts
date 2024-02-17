import { ReactNode } from "react";

export type ClassNameType = {
  className?: string;
};
export type onClickType = {
  onClick: (value?: any) => void;
};
export type loadingType = {
  length: number | boolean;
  loading: boolean;
};
export type ButtonProps = {
  text: string;
  className?: string;
  icon?: ReactNode;
  id?: string;
  onClick?: ((event: React.MouseEvent) => void) | (() => void);
  disabled?: boolean;
  loading?: boolean;
  loadingClass?: string;
  error?: boolean;
  errorClass?: string;
  type?: "submit" | "button" | "reset" | undefined;
  form?: string;
};
export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
