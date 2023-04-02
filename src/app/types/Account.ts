export type AccountType = {
    _id: string
    agency: number
    accountNumber: number
    balance?: number
    client: {
        name: string
    }
    operations: [
        {
            _id: string
            createdAt: string
            value: number
        }
    ]
}