import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { Button } from '../../shared/components/button'
import { Title, Dados, Form, Input, Link, Wrapper } from './styled'


const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/dash";

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isLogged = await auth.signIn(email, password)
        if (isLogged) {
            navigate(from, { replace: true });
        } else {
            navigate('/login')
        }

    }


    return (
        <Wrapper>
            <Title>Login</Title>
            <Dados>Informe seus dados para entrar</Dados>
            <Form onSubmit={handleSubmit}>
                <Input type="email" placeholder="E-mail" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <Input type="password" placeholder="Senha" value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <Button width="100%" height="30px" bg='#00d8d8' >
                    Entrar
                </Button>
            </Form>
            <Link href="/">Esqueci a senha</Link>
        </Wrapper>
    )
}

export default Login