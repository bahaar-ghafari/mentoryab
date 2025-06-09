import React, { ComponentProps, JSX } from "react";
import Image from "next/image";

export type ImageProps = ComponentProps<typeof Image> & {
  fallbackIcon?: React.ReactNode;
  fallbackWrapperTag?: keyof JSX.IntrinsicElements;
};
