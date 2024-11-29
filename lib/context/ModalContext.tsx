import {
  Fragment,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import Modal from "../components/Modal"
import { ContextProps, ShowModalProps } from "../types"
import ModalContext from "./Context.ts"

export default function ModalProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  const [overlays, setOverlays] = useState<
    { content: ReactElement; modalKey: string }[]
  >([])

  const showModal = useCallback(({ content, ...other }: ShowModalProps) => {
    const modalKey = crypto.randomUUID().slice(0, 8)
    const modal = (
      <Modal key={modalKey} modalKey={modalKey} {...other}>
        {content}
      </Modal>
    )
    setOverlays(prev => [...prev, { modalKey, content: modal }])
  }, [])

  const closeModal = useCallback(() => {
    const lastModal = overlays.at(-1)
    if (!lastModal) return

    const body = document.querySelector(
      `[data-dialog-key="${lastModal.modalKey}"]`,
    )

    body?.classList.add("body__exit")
    body?.parentElement?.classList.add("modal__exit")
    setTimeout(() => {
      setOverlays(prev => prev.slice(0, -1))
    }, 400)
  }, [overlays])

  const actions = useMemo(() => {
    return {
      showModal,
      closeModal,
    } satisfies ContextProps
  }, [showModal, closeModal])

  useEffect(() => {
    const lastModal = overlays.at(-1)
    if (!lastModal) return

    const body = document.querySelector(
      `[data-dialog-key="${lastModal.modalKey}"]`,
    ) as HTMLElement | null

    body?.focus()
  }, [overlays])

  return (
    <ModalContext.Provider value={actions}>
      {children}

      {overlays.map(overlay => (
        <Fragment key={overlay.modalKey}>{overlay.content}</Fragment>
      ))}
    </ModalContext.Provider>
  )
}
