import { ImageRole } from "./Image.types";

export function getPlaceholderSrc(roleType?: ImageRole) {
  switch (roleType) {
    case "projectPreview":
      return "/images/placeholders/project-preview.svg";
    case "mentorAvatar":
      return "/images/placeholders/mentor-avatar.svg";
    default:
      return "/images/placeholders/mentee-avatar.svg";
  }
}
