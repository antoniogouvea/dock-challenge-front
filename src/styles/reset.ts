import { css } from 'styled-components/macro'

// Reference: https://www.joshwcomeau.com/css/custom-css-reset/
export const RESETCSS = css`
	/*
  1. Use a more-intuitive box-sizing model.
*/
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	/*
  2. Remove default margin
*/
	* {
		margin: 0;
	}
	/*
  3. Allow percentage-based heights in the application
*/
	html,
	body,
	#root {
		height: 100%;
	}
	/*
  6. Improve media defaults
*/
	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}
	/*
  7. Remove built-in form typography styles
*/
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
	/*
  8. Avoid text overflows
*/
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}
	/*
  9. Create a root stacking context
*/
	#root,
	#__next {
		isolation: isolate;
	}
`
