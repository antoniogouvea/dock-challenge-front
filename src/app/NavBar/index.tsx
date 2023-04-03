import { Link, LinkProps, useMatch, useNavigate, useResolvedPath } from "react-router-dom"
import { LI, Nav, UL, StyledLink, LinkText, LogoutLink } from "./styled"
import { useContext, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileInvoiceDollar, faHome, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../Auth/AuthContext"


export default function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut()
    navigate('/login')
  }

  useEffect(() => {
    document.body.style.paddingTop = '3em';
  }, [])

  return (
    <Nav className="nav">
      <StyledLink to="/dash" className="site-title">
        <FontAwesomeIcon icon={faHome} /><LinkText>Dashboard</LinkText>
      </StyledLink>
      <UL>
        <CustomLink to="/users"><FontAwesomeIcon icon={faUser} /><LinkText>Usuários</LinkText></CustomLink>
        <CustomLink to="/account"><FontAwesomeIcon icon={faFileInvoiceDollar} /><LinkText>Account</LinkText></CustomLink>
        <LogoutLink onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /><LinkText>Logout</LinkText></LogoutLink>

      </UL>
    </Nav >
  )
}
type CustomLinkType = {
  to: string
  children?: any
  props?: typeof Link
}



function CustomLink({ to, children, ...props }: CustomLinkType) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <LI className={isActive ? "active" : ""}>
      <StyledLink to={to} {...props} >
        {children}
      </StyledLink>
    </LI>
  )
}