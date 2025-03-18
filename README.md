# dock-challenge-front

This project was created using React with Vite as a base. I also used styled components as a CSS pre-renderer, all communication with the backend was done using Axios as standard, allowing the change to Rest without the need for a new library.

All communication is done using JWT as an access validator. And this includes all routes that provide some data to the client.

Does the system have some routes?:

- Dash
Shows all existing accounts, with their data and allows editing of the same.

- Dash/:id
Allows adding or removing the balance of the client's account, changing the balance value.

- Account
Allows the creation of a new account.

- User
Allows the creation of a new user for the application.

To run the project locally it is necessary

```bash
$ npm run dev
```

```bash
Login: dock@dock.com
Password: dockTeste
```
