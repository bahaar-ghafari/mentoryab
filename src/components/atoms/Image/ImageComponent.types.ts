import React from "react";

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackIcon?: React.ReactNode;
  priority?: boolean;
}