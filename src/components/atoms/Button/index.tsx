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

const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  size = "md",
}) => {
  const isDisabled = disabled || loading;
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors";
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
        ? "px-5 py-3 text-lg"
        : "px-4 py-2 text-base";
  const variantClasses = isDisabled
    ? "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed"
    : variant === "solid"
      ? "bg-green-500 text-white"
      : "border border-green-500 text-green-500";
  const hoverClasses = isDisabled
    ? ""
    : variant === "solid"
      ? "hover:bg-green-700"
      : "hover:bg-green-50";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${hoverClasses} ${
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

export default CustomButton;
