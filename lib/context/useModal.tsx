import { useContext } from "react"
import { ContextProps } from "../types"
import ModalContext from "./Context.ts"

export default function useModal(): ContextProps {
  const context = useContext(ModalContext)!
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
