import { useContext, useState } from "react"
import Navbar from "../NavBar"
import { ButtonDiv, Form, Input, Title, Wrapper } from "./styled"
import { Button } from '../../shared/components/button'
import { Box1, Box2, InputTitle } from "../AccountEdit/styled"
import { api } from "../../api/axios.config"
import { AuthContext } from "../Auth/AuthContext"

function Account() {

    const [account, setAccount] = useState("")
    const [agency, setAgency] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientCpf, setClientCpf] = useState("")
    const auth = useContext(AuthContext);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const results = await api.post('',
            {
                query: `
            mutation createAccount($createAccountArgs:CreateAccountArgs!) {
                createAccount(createAccountArgs: $createAccountArgs) {
                  _id
                  agency
                  accountNumber
                  client{
                    name
                    cpf
                  }
                }
              }
              `,
                variables: {
                    "createAccountArgs": {
                        "agency": +agency,
                        "accountNumber": +account,
                        "client": {
                            "name": clientName,
                            "cpf": clientCpf
                        }

                    }
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${auth.getToken()}`
                }
            })
        setAccount("")
        setAgency("")
        setClientName("")
        setClientCpf("")
    }

    return (
        <>
            <Navbar />
            <Wrapper>
                <Title>Criar Conta</Title>
                <Form onSubmit={handleSubmit}>
                    <Box1>
                        <InputTitle>Conta</InputTitle>
                        <Input type="number" placeholder="Conta" value={account}
                            onChange={(e) => setAccount(e.target.value)} />
                        <InputTitle>Agência</InputTitle>
                        <Input type="number" placeholder="Agência" value={agency}
                            onChange={(e) => setAgency(e.target.value)} />
                    </Box1>
                    <Box2>
                        <InputTitle>Nome do cliente</InputTitle>
                        <Input type="text" placeholder="Nome Cliente" value={clientName}
                            onChange={(e) => setClientName(e.target.value)} />
                        <InputTitle>Cpf do cliente</InputTitle>
                        <Input type="number" placeholder="Cpf Cliente" value={clientCpf}
                            onChange={(e) => setClientCpf(e.target.value)} />
                    </Box2>
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
export default Account