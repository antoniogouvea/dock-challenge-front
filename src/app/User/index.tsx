import { useContext, useState } from "react";
import { api } from "../../api/axios.config";
import Navbar from "../NavBar"
import { Box, ButtonDiv, Form, Input, Title, Wrapper } from "./styled";
import { Box1, Box2, InputTitle } from "../AccountEdit/styled";
import { Button } from "../../shared/components/button";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function User() {
    const auth = useContext(AuthContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await api.post('',
            {
                query: `
                mutation createUser($createUser:CreateUserDto!) {
                    createUser(createUser: $createUser) {
                    _id
                    name
                    email
                  }
                }
              `,
                variables: {
                    createUser: {
                        "name": name,
                        "email": email,
                        "password": password
                    }
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${auth.getToken()}`
                }
            })
        setName("")
        setEmail("")
        setPassword("")
        navigate('/dash')
    }


    return (
        <>
            <Navbar />
            <Wrapper>
                <Title>Criar Usuário</Title>
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <InputTitle>Nome</InputTitle>
                        <Input type="text" placeholder="Nome" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <InputTitle>Email</InputTitle>
                        <Input type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <InputTitle>Senha</InputTitle>
                        <Input type="text" placeholder="Senha" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Box>

                    <ButtonDiv>
                        <Button width="8em" height="30px" bg='#212121' color='#fff' >
                            Criar
                        </Button>
                    </ButtonDiv>
                </Form>
            </Wrapper>
        </>
    )
}
export default User