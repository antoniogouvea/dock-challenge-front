# dock-challenge-front

Esse projeto foi criado utilizando o React com Vite como base. Utilizei também o styled components como pré-renderizador do CSS, toda a comunicação com o backend foi feita utilizando o Axios como padrão, possibilitando a mudança para Rest sem necessidade de uma nova biblioteca.

Todo a comunicação é feita utilizando o JWT como validador de acesso. E isto inclui todas as rotas que fornecem algum dado para o cliente.

O sistema possui algumas rotas?:

- Dash
  Mostra todas as contas existentes, com os seus dados e possibilita a edição da mesma.
- Dash/:id
  Pemite a adição ou remoção do saldo da conta do cliente, alterando o valor do saldo.
- Account
  Permite a criação de uma nova conta.
- User
  Permite a criação de um novo usuário para a aplicação.

Para rodar o projeto localmente é necessário

    ´´npm run dev´´
