import {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react"
import Modal from "../components/Modal"
import { AnimatePresence } from "framer-motion"
import { ContextProps, ModalConfig, ShowModalProps } from "../types"
import ModalContext from "./Context.ts"

type ModalStackType = {
  modalKey: string
  content: ReactElement
  config?: ModalConfig
}
export default function ModalProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  const [overlays, setOverlays] = useState<ModalStackType[]>([])

  const showModal = useCallback(({ content, config }: ShowModalProps) => {
    setOverlays(prev => [
      ...prev,
      { modalKey: crypto.randomUUID(), config, content },
    ])
  }, [])

  const closeModal = useCallback((e: SyntheticEvent) => {
    e.stopPropagation()
    setOverlays(prev => prev.slice(0, -1))
  }, [])

  const actions = useMemo(() => {
    return {
      showModal,
      closeModal,
    } satisfies ContextProps
  }, [showModal, closeModal])
  return (
    <ModalContext.Provider value={actions}>
      {children}
      <AnimatePresence>
        {overlays.map(({ content, config, modalKey }) => (
          <Modal key={modalKey} config={config}>
            {content}
          </Modal>
        ))}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}
