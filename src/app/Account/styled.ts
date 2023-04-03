import styled from 'styled-components/macro'

export const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
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
export const Form = styled.form`
display: inline-flex;
width: 100%;
flex-wrap: wrap;
`

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
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
export const ButtonDiv = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 1em;
`