import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { LI, Nav, UL, StyledLink } from "./styled"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileInvoiceDollar, faHome, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  useEffect(() => {
    document.body.style.paddingTop = '60px';
  }, [])

  return (
    <Nav className="nav">
      <StyledLink to="/dash" className="site-title">
        <FontAwesomeIcon icon={faHome} />&nbsp;Dashboard
      </StyledLink>
      <UL>
        <CustomLink to="/users" ><FontAwesomeIcon icon={faUser} />&nbsp;Usuários</CustomLink>
        <CustomLink to="/account"><FontAwesomeIcon icon={faFileInvoiceDollar} />&nbsp;Account</CustomLink>
        <CustomLink to="/logout"><FontAwesomeIcon icon={faArrowRightFromBracket} />&nbsp;Logout</CustomLink>

      </UL>
    </Nav>
  )
}
type CustomLinkType = {
  to: string
  children?: any
  props?: Element
}



function CustomLink({ to, children, ...props }: CustomLinkType) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <LI className={isActive ? "active" : ""}>
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    </LI>
  )
}