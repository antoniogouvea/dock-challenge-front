import { useParams } from "react-router-dom"
import Navbar from "../NavBar"
import { useCallback, useContext, useEffect, useState } from "react"
import { api } from "../../api/axios.config"
import { Box1, Box2, Box3, Button, InputTitle, InputValue, Wrapper, ButtonsWrapper, InputValue2 } from "./styled"
import { AccountType } from "../types/Account"
import { TBody, TBodyTR, TD, TH, THead, THeadTR, Table } from "../Dash/styled"
import { AuthContext } from "../Auth/AuthContext"

const AccountEdit = () => {
    const { id } = useParams()
    const [account, setAccount] = useState<AccountType>()
    const [value, setValue] = useState('')
    const auth = useContext(AuthContext);

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
                    transactionType
                  }
                }
              }`
        },
            {
                headers: {
                    Authorization: `Bearer ${auth.getToken()}`
                }
            }
        )
        setAccount(results.data.data.getAccountById)
    }, [id])

    const sendValueToAccount = async (type: string, accountNumber: number | undefined) => {
        if (+value > 0) {
            const results = await api.post('', {
                query: `
                mutation updateValueToAccount($value:Float!, $transactionType:String!, $user:String!, $account:String!) {
                    updateValueToAccount(valueToUpdateArgs: {value:$value,transactionType: $transactionType,user:$user,account:$account }) {
                      _id
                      balance
                      operations{
                        _id
                        createdAt
                        value
                        user
                        transactionType
                      }
                    
                  }
                  
            }`,
                variables: {
                    "value": +value,
                    "transactionType": type,
                    "user": auth.user?._id,
                    "account": accountNumber?.toString()

                }

            },
                {
                    headers: {
                        Authorization: `Bearer ${auth.getToken()}`
                    }
                }
            )
            fetchAccount()
        }
    }

    useEffect(() => {
        fetchAccount()
    }, [fetchAccount])

    return (
        <>
            <Navbar />
            <Wrapper>

                <Box1>
                    <InputTitle>Agência</InputTitle>
                    <InputValue>{account?.agency} </InputValue>
                    <InputTitle>Conta</InputTitle>
                    <InputValue>{account?.accountNumber}</InputValue>
                    <InputTitle>Nome do cliente</InputTitle>
                    <InputValue>{account?.client.name}</InputValue>
                </Box1>
                <Box2>
                    <InputTitle> Saldo</InputTitle>
                    <InputValue>{account?.balance}</InputValue>

                    <ButtonsWrapper>
                        <InputTitle> Depositar/Sacar</InputTitle>
                        <InputValue2 type="text" value={value} onInput={e => setValue(e.currentTarget.value)} />
                        <Button onClick={() => sendValueToAccount('add', account?.accountNumber)}>Depositar</Button>
                        <Button onClick={() => sendValueToAccount('withdraw', account?.accountNumber)}>Sacar</Button>
                    </ButtonsWrapper>
                </Box2>
                <Box3>
                    <InputTitle>Movimentações</InputTitle>
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
                                        <TD>{operation.transactionType == 'add' ? "+" : "-"} {operation.value}</TD>
                                    </TBodyTR>
                                );
                            })}
                        </TBody>
                    </Table>
                </Box3>
            </Wrapper>
        </>
    )
}
export default AccountEdit