# 💰 ByteBank

O **ByteBank** é uma aplicação desenvolvida em **TypeScript** (que é transpilado para JavaScript) que simula transações bancárias, como depósitos, pagamento de boletos e transferências. A aplicação permite ao usuário registrar e visualizar suas operações financeiras, incluindo um extrato com data e valores. 

---

## 🚀 Funcionalidades

- **Tela Inicial**:
  - Exibe o nome do titular, saldo atual e data.
  - Formulário para realizar transações financeiras: depósito, pagamento de boleto e transferência.
  - O formulário exige o valor da transação e a data em que ela foi realizada.
  
- **Extrato**:
  - Exibe o extrato com data e valores das operações realizadas.
  - Transações de **depósito** adicionam o valor ao saldo (com um símbolo de `+`).
  - Transações de **saque/transferência** ou **pagamento de boleto** debitam o valor do saldo (com um símbolo de `-`).

---

## 🚀 Tecnologias Utilizadas

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

---

## 🧭 Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/bytebank.git
    ```

2. Compile o código TypeScript para JavaScript:
    ```bash
    tsc -w
    ```

3. Abra o arquivo `index.html` em seu navegador ou execute a aplicação no servidor de sua preferência.

---

## 📝 Funcionalidades

- **Depósito**: Adiciona um valor ao saldo bancário.
- **Pagamento de Boleto**: Deduz um valor do saldo bancário.
- **Transferência**: Deduz um valor do saldo e realiza a transferência para outro titular.

### Extrato

O extrato exibe as transações realizadas na conta, com a data e o valor de cada operação.

- **Depósitos** são somados ao saldo e exibidos como `+valor`.
- **Pagamentos de boletos e transferências** são deduzidos do saldo e exibidos como `-valor`.

---

## ✨ Objetivo do Projeto

O **ByteBank** foi desenvolvido com o objetivo de praticar conceitos de **TypeScript**, manipulação de **DOM** e criação de **formulários interativos**. A aplicação foi projetada para simular transações bancárias simples, proporcionando uma experiência prática para entender como as operações financeiras podem ser modeladas em um sistema.

---

## 🚧 Em Desenvolvimento

Este projeto está em constante evolução. Funcionalidades futuras, como autenticação de usuário e integração com APIs externas para transações reais, podem ser adicionadas em breve.
