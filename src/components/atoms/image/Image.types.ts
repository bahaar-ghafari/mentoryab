import { ImageProps } from "next/image";

export type ImageRole = "mentorAvatar" | "menteeAvatar" | "projectPreview";

export interface CustomImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  roleType?: ImageRole;
  priority?: boolean;
}
