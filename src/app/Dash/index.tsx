import { useState } from "react";
import Navbar from "../NavBar";
import { Table, TBody, TBodyTR, TD, TDnav, TH, THead, THeadTR, Wrapper } from './styled';

function Dash() {
    const [accounts, setAccounts] = useState([
        {
            _id: '6425a958dd2499ea24b9ff28',
            "agency": 1235,
            "accountNumber": 459,
            "client": {
                "name": "John3"
            }
        },
        {
            _id: '6425aa40dd2499ea24b9ff2a',
            "agency": 1235,
            "accountNumber": 459,
            "client": {
                "name": "John3"
            }
        },
    ])
    return (
        <>
            <Navbar />
            <Wrapper>
                <Table >
                    <THead>
                        <THeadTR>
                            <TH>Conta</TH>
                            <TH>Agencia</TH>
                            <TH>Cliente</TH>
                        </THeadTR>
                    </THead>
                    <TBody>
                        {accounts.map((account) => {
                            return (
                                <TBodyTR className='account' key={account._id}>
                                    <TD>{account.accountNumber}</TD>
                                    <TD>{account.agency}</TD>
                                    <TD>{account.client.name}</TD>
                                    <TDnav>Editar</TDnav>
                                    <TDnav>Deletar</TDnav>

                                </TBodyTR>
                            );
                        })}
                    </TBody>
                </Table>
            </Wrapper>
        </>
    )
}
export default Dash