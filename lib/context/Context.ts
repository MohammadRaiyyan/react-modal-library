import { createContext } from "react"
import { ContextProps } from "../types"

const ModalContext = createContext<ContextProps | undefined>(undefined)
export default ModalContext
