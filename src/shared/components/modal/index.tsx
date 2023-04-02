import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../../assets/icons/close.svg'
import { Backdrop, IconWrapper, ModalContent, ModalWrapper } from './styled'

interface ModalProps {
	children?: React.ReactNode
	onClose: () => void
	maxHeight?: string
	top: string
}

const Modal = ({ children, onClose, maxHeight, top }: ModalProps) => {
	const backdropDiv = document.getElementById('backdrop-root')!
	const modalDiv = document.getElementById('modal-root')!
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClick={onClose} />, backdropDiv)}
			{ReactDOM.createPortal(
				<ModalWrapper top={top}>
					<IconWrapper onClick={onClose}>
						<Icon />
					</IconWrapper>
					<ModalContent maxHeight={maxHeight}>{children}</ModalContent>
				</ModalWrapper>,
				modalDiv
			)}
		</>
	)
}

export default Modal
