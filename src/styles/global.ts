import { createGlobalStyle } from 'styled-components'
import { RESETCSS } from './reset'

export const GlobalStyles = createGlobalStyle`
${RESETCSS}
:root {

	/* COLORS SETINGS */
	--color-primary: #FF7F40;
	--color-background: #E5E5E5;
	--color-accent-background: #f8f8f8;
	--color-white: #fff;

	--color-blue-border: #1aabff;
	--color-blue-button:#00d8d8;
	--color-blue-link:#0b6fcc;

	--color-gold-light: #FFFDE5;
	--color-gold: #FFF8C7;
	--color-gold-mid: #FFE5A4;
	--color-gold-dark: #D09636;

	--color-blue-light: #E1F5FF;
	--color-blue-mid:#C1E4F7;
	--color-blue: #04B4F5;

	--color-green-light: #E5FFE7;
	--color-green-mid:#CCF1CC;

	--color-red-light: #FFF3F6;
	--color-red-mid: #FEDEE5;

	/* COLORS MOOD */
	--color-info: #04B4F5;
	--color-success: #71C879;
	--color-danger: #DE1D48;

	
	/* COLORS GRAYS */
	--color-gray-disabled: #A1A1A6;
	--color-gray-light: #F8F8F8;
	--color-gray-mid: #EAEAEA;
	--color-gray-mid-2: #A1A1A6;
	--color-gray-dark: #696970;
	--color-gray-dark-2: #6D7278;
	--color-black: #5B5E60;


	/* FONT SETTINGS */
	--font-primary: "SF Mono",ui-monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;

	/* FONT WEIGHTS */
	--font-weight-light: 300;
	--font-weight-normal: 400;
	--font-weight-bold: 600;
}

body {
	font-family: var(--font-primary);
	color: var(--color-black);
	scrollbar-color: var(--color-primary) white;
	display: flex!important;
	margin: 0;
}
`
