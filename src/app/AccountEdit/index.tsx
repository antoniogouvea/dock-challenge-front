import { useParams } from "react-router-dom"
import Navbar from "../NavBar"
import { useCallback, useEffect, useState } from "react"
import { api } from "../../api/axios.config"
import { Box1, Box2, Box3, InputTitle, InputTitle2, InputValue, Wrapper } from "./styled"
import { AccountType } from "../types/Account"
import { TBody, TBodyTR, TD, TH, THead, THeadTR, Table } from "../Dash/styled"

const AccountEdit = () => {
    const { id } = useParams()
    console.log("🚀 ~ file: index.tsx:11 ~ AccountEdit ~ id:", id)
    const [account, setAccount] = useState<AccountType>()

    const fetchAccount = useCallback(async () => {
        const results = await api.post('', {
            query: `{
                getAccountById(id:"${id}"){
                  _id
                  agency
                  accountNumber
                  client{
                    name
                  }
                  balance
                  operations{
                    _id
                    createdAt
                    value
                  }
                }
              }`
        })
        console.log(results.data.data.getAccountById)
        setAccount(results.data.data.getAccountById)
    }, [id])


    useEffect(() => {
        fetchAccount()
    }, [fetchAccount])

    return (
        <>
            <Navbar />
            <Wrapper>
                <Box1>
                    <InputTitle2>Agência</InputTitle2>
                    <InputValue>{account?.agency} </InputValue>
                    <InputTitle2>Conta</InputTitle2>
                    <InputValue>{account?.accountNumber}</InputValue>
                    <InputTitle2>Nome do cliente</InputTitle2>
                    <InputValue>{account?.client.name}</InputValue>
                </Box1>
                <Box2>
                    <InputTitle2> Saldo</InputTitle2>
                    <InputValue>{account?.balance}</InputValue>
                </Box2>
                {/* <div>
                    <button >Depositar</button>
                    <button>Sacar</button>
                </div> */}
                <Box3>
                    <InputTitle2>Movimentações</InputTitle2>
                    <Table >
                        <THead>
                            <THeadTR>
                                <TH>Data</TH>
                                <TH>Valor</TH>
                            </THeadTR>
                        </THead>
                        <TBody>
                            {account?.operations.map((operation) => {
                                return (
                                    <TBodyTR className='operation' key={operation?._id}>
                                        <TD>{operation.createdAt}</TD>
                                        <TD>{operation.value}</TD>
                                    </TBodyTR>
                                );
                            })}
                        </TBody>
                    </Table>
                </Box3>
                {/* <Form>

           </Form> */}
            </Wrapper>

            {/* <div>{{ account }}</div> */}
        </>
    )
}
export default AccountEdit