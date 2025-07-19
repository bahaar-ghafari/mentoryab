/** @format */

import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "Hovered";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  size = "md",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium ";
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
        ? "px-5 py-3 text-lg"
        : "px-4 py-2 text-base";
  const variantClasses = disabled
    ? "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed"
    : variant === "solid"
      ? "bg-green-500 text-white hover:bg-green-700"
      : // "border border-green-500 text-green-500 hover:bg-green-50"
        variant === "Hovered"
        ? "bg-green-700 text-white"
        : "border border-green-500 text-green-500";
  const isDisabled = disabled;
  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button disabled={isDisabled} className={classes}>
      {loading ? (
        <AutorenewIcon className="animate-spin" fontSize="small" />
      ) : (
        <span className="flex items-center gap-2">
          {iconPosition === "left" && icon}
          {children}
          {iconPosition === "right" && icon}
        </span>
      )}
    </button>
  );
};

export default Button;
