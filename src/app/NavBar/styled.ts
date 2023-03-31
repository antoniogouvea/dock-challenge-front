import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 60px;
background-color: var(--color-blue-button);
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
z-index: 999;
color: var(--color-white);
display: flex;
justify-content: space-between;
padding: 1em;

`
export const UL = styled.ul`
float:right;
display: inline-flex;
list-style-type: none;
`
export const LI = styled.li`
margin-left:1em;

`
export const StyledLink = styled(Link)`
text-decoration: none;
:hover{
    color: var(--color-white);
}
`