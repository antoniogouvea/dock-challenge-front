import styled from 'styled-components/macro'
import MaxWidthWrapper from '../max-width-wrapper'

// const fadeIn = keyframes``

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
`

export const ModalWrapper = styled(MaxWidthWrapper) <{ top: string }>`
	position: fixed;
	top: ${({ top }) => top};
	left: 10px;
	right: 10px;
	padding: 0;
	border-radius: 3px;
	background-color: var(--color-gray-light);
`

export const IconWrapper = styled.div`
	position: absolute;
	top: -35px;
	right: 3px;
`

export const ModalContent = styled.div<{ maxHeight?: string }>`
	${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
	overflow-y: auto;
`
export const Icon = styled.img`
	fill:'white';
	width:'28px';
`