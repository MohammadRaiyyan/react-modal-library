import { ModalSize } from "../types"

export const getModalSizes = ({ size }: { size?: ModalSize }) => {
  if (typeof size === "object") {
    return {
      width: size.width,
      height: size.height,
    }
  }

  switch (size) {
    case "sm":
      return { width: "300px", height: "auto" }
    case "md":
      return { width: "600px", height: "auto" }
    case "lg":
      return { width: "800px", height: "auto" }
    case "xl":
      return { width: "900px", height: "auto" }
    case "2xl":
      return { width: "1000px", height: "auto" }
    case "3xl":
      return { width: "1200px", height: "auto" }
    case "full":
      return { width: "100vw", height: "100vh" }
    default:
      return { width: "600px", height: "auto" }
  }
}
