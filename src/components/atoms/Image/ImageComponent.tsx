"use client";

import { useState } from "react";
import Image from "next/image";
import * as Icons from "@/components/atoms/Icons/Icons";
import { ImageProps } from "./ImageComponent.types";

const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  fallbackIcon,
  fallbackWrapperTag: Tag = "div",
  onError,
  ...rest
}) => {
  const [isError, setIsError] = useState(false);

  if (isError || !src) {
    return <Tag>{fallbackIcon || <Icons.FallbackimgIcon />}</Tag>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={(e) => {
        setIsError(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
};

export default CustomImage;
