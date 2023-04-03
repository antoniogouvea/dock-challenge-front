export type User = {
    _id: number;
    name: string;
    email: string;
    password?: string;
}
export type UserLogin = {
    email: string
    password: string
}