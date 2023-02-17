import { ReactElement } from "react"

interface ModalProps {
  children: ReactElement
}
export default function Modal(props: ModalProps) {

  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}