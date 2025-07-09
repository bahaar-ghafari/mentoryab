import Image from "next/image";
import { CustomImageProps } from "./Image.types";
import { getPlaceholderSrc } from "./placeholders";
import { getRoleDefaults } from "./getRoleDefaults";

export default function CustomImage({
  src,
  alt,
  width,
  height,
  priority,
  roleType,
  sizes,
  className,
  ...rest
}: CustomImageProps) {
  const fallbackSrc = getPlaceholderSrc(roleType);
  const finalSrc = src && src !== "" ? src : fallbackSrc;

  const roleDefaults = getRoleDefaults(roleType);

  return (
    <Image
      src={finalSrc}
      alt={alt}
      width={width ?? roleDefaults.width}
      height={height ?? roleDefaults.height}
      sizes={sizes ?? roleDefaults.sizes}
      loading={priority ?? roleDefaults.priority ? "eager" : "lazy"}
      priority={priority ?? roleDefaults.priority}
      className={`${roleDefaults.className ?? ""} ${className ?? ""}`}
      role="img"
      {...rest}
    />
  );
}
