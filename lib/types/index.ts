import { ReactElement, SyntheticEvent } from "react"

export type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | { width: string; height: string }
export type ModalConfig = { size?: ModalSize; disableOutsideClick?: boolean }
export type ShowModalProps = {
  config?: ModalConfig
  content: ReactElement
}

export type ContextProps = {
  showModal: (props: ShowModalProps) => void
  closeModal: (e: SyntheticEvent) => void
}
