import styled from 'styled-components/macro'

export const Wrapper = styled.div`
	background-color: var(--color-white);
	margin-left: auto;
	margin-right: auto;
	max-width: 243px;
	height: 260px;
	border: 4px solid var(--color-blue-border);
	border-radius: 3px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 25px;

`
export const Title = styled.h1`
	margin-top: 30px;
	margin-bottom: 5px;
	font-size: ${20 / 16}rem;
`

export const Dados = styled.p`
	margin-bottom: 13px;
	font-weight: var(--font-weight-light);
	font-size: ${12 / 16}rem;
	width: 100%;
`
export const Form = styled.form``

export const Input = styled.input`
	width: 100%;
	height: 30px;
	border: 1px solid var(--color-gray-mid);
	border-radius: 3px;
	font-weight: var(--font-weight-light);
	font-size: ${14 / 16}rem;
	padding-top: 6px;
	padding-bottom: 6px;
	padding-left: 8px;
	padding-right: 8px;
	margin-bottom: 10px;
	&::placeholder {
		font-style: italic;
	}
`

export const Link = styled.a`
	display: block;
	margin-top: 10px;
	color: var(--color-blue-link);
	font-weight: var(--font-weight-light 300px);
	font-size: ${12 / 16}rem;
	text-decoration: underline;
`
