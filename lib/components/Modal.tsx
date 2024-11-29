import React, { ReactElement, useCallback, useEffect, useState } from "react"
import { ShowModalProps } from "../types"
import classes from "./Modal.module.css"
import useModal from "../context/useModal"
import "../global.css"

export default function Modal(
  props: Omit<ShowModalProps, "content"> & {
    children: ReactElement
    modalKey: string
  },
) {
  const {
    size = "md",
    disableOutsideClick = false,
    className = "",
    bodyProps: { className: bodyClass = "", ...other } = {},
    children,
    modalKey,
  } = props || {}

  const { closeModal } = useModal()
  const [animationState, setAnimationState] = useState("")

  // Run handler to close the modal on escape key press
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation()
      if (e.key === "Escape") {
        if (!disableOutsideClick) {
          closeModal(e)
        }
      }
    },
    [closeModal, disableOutsideClick],
  )
  // Run handler on the modal to close the modal
  const handleOutSideClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!disableOutsideClick) {
        closeModal(e)
      }
    },
    [closeModal, disableOutsideClick],
  )

  useEffect(() => {
    // Let the modal mount in the dom properly then apply the enter animation class 10ms is enough for browser to paint
    const timer = setTimeout(() => setAnimationState("enter"), 10)
    return () => {
      clearTimeout(timer)
      setAnimationState("")
    }
  }, [])

  return (
    <div
      className={`${classes.modal} ${className} modal__${animationState}`}
      onMouseDown={handleOutSideClick}
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      <div
        data-dialog-key={modalKey}
        className={`${classes["body"]}
           ${classes[`__${size}`]}
            body__${animationState}
            ${bodyClass}
        `}
        onMouseDown={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...other}
      >
        {children}
      </div>
    </div>
  )
}
