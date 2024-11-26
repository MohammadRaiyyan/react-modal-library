import { ReactElement } from "react"
import { motion } from "framer-motion"
import { ModalConfig } from "../types"
import classes from "./Modal.module.css"
import { getModalSizes } from "../utils/getModalSizes.ts"
import useModal from "../context/useModal.tsx"

export default function Modal({
  children,
  config,
}: {
  children: ReactElement
  config?: ModalConfig
}) {
  const { size = "md", disableOutsideClick = false } = config || {}
  const { closeModal } = useModal()
  return (
    <motion.div
      className={classes.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onMouseDown={e => {
        e.stopPropagation()
        if (!disableOutsideClick) {
          closeModal(e)
        }
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={classes["modal--body"]}
        style={{
          ...getModalSizes({ size }),
        }}
        onMouseDown={e => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
