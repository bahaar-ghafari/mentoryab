import dynamic from "next/dynamic";

export const FallbackimgIcon = dynamic(
  () => import("react-icons/bi").then((mod) => mod.BiImageAlt),
  {
    ssr: false,
  }
);
