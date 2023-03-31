import styled from 'styled-components'

export const Button = styled.button<{
	width?: string
	height?: string
	color?: string
	bg?: string
	border?: string
	padding?: string
	disabled?: boolean
	primary?: boolean
}>`
	outline: none;
	border: none;
	font-size: ${14 / 16}rem;
	border-radius: 3px;
	${({ padding }) => padding && `padding: ${padding};`}
	${({ width }) => width && `width: ${width};`}
	${({ height }) => height && `height: ${height};`}
	${({ border }) => border && `border: ${border};`}
	${({ color }) => color && `color: ${color};`}
	${({ bg }) => bg && `background-color: ${bg};`}
	${({ disabled }) => disabled && `opacity: 0.5;`}
	${({ primary }) => primary && `color: var(--color-white); background-color: var(--color-primary);`}

	&:hover {
		cursor: pointer;
	}
`
