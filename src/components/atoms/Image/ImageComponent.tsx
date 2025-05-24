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
  priority = false,
}) => {
  const [isError, setIsError] = useState(false);

  if (isError || !src) {
    return <div>{fallbackIcon || <Icons.FallbackimgIcon />}</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 400px"
      className={`object-cover ${className}`}
      priority={priority}
      onError={() => setIsError(true)}
    />
  );
};

export default CustomImage;
