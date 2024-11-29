import React, { ReactElement } from "react"

export type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | { width: string; height: string }

type ModalBodyProps = {
  className?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
  "aria-hidden"?: boolean
  "aria-live"?: "off" | "polite" | "assertive"
  "aria-modal"?: boolean
  "aria-role"?: string
  tabIndex?: number
  role?: string
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  onFocus?: (event: React.FocusEvent) => void
  id?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export type ShowModalProps = {
  content: ReactElement
  className?: string
  bodyProps?: ModalBodyProps
  size?: ModalSize
  disableOutsideClick?: boolean
}

export type ContextProps = {
  showModal: (props: ShowModalProps) => void
  closeModal: () => void
}
