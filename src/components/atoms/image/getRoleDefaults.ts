import { ImageRole } from "./Image.types";

export function getRoleDefaults(roleType?: ImageRole) {
  switch (roleType) {
    case "mentorAvatar":
    case "menteeAvatar":
      return {
        width: 128,
        height: 128,
        className: "rounded-full",
        sizes: "(max-width: 768px) 50vw, 128px",
        priority: false,
      };
    case "projectPreview":
      return {
        width: 200,
        height: 125,
        className: "rounded-md border-2",
        sizes: "(max-width: 768px) 100vw, 800px",
        priority: false,
      };
    default:
      return {
        width: 100,
        height: 100,
        className: "rounded-md",
        sizes: "(max-width: 768px) 75vw, 200px",
        priority: false,
      };
  }
}
