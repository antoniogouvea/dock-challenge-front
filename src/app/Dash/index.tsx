import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios.config";
import Navbar from "../NavBar";
import { AccountType } from "../types/Account";
import { TBody, TBodyTR, TD, TDnav, TH, THead, THeadTR, Table, Wrapper } from './styled';
function Dash() {

    const [accounts, setAccounts] = useState<AccountType[]>([])

    const fetchAccounts = useCallback(async () => {
        const results = await api.post('', {
            query: `{
                getAllaccounts: getAllAccounts {
                    _id
                    agency
                    accountNumber
                    client{
                      name
                    }
              }}
              `
        })

        setAccounts(results.data.data.getAllaccounts)
    }, [])


    useEffect(() => {
        fetchAccounts()
    }, [fetchAccounts])

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
                        {accounts.map((account: AccountType) => {
                            return (
                                <TBodyTR className='account' key={account._id}>
                                    <TD>{account.accountNumber}</TD>
                                    <TD>{account.agency}</TD>
                                    <TD>{account.client.name}</TD>
                                    <TDnav>
                                        <Link to={`/account/${account._id}`}>
                                            <FontAwesomeIcon icon={faPenToSquare} />Editar
                                        </Link>
                                    </TDnav>
                                    <TDnav><FontAwesomeIcon icon={faTrashCan} />&nbsp;Deletar</TDnav>

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


