# 📱 Random User App

Aplicativo em React Native que consome a API [Random Data API](https://random-data-api.com) para listar usuários aleatórios, com opção de ver detalhes ao clicar em um item da lista.

## 🚀 Funcionalidades

- ✅ Lista de usuários aleatórios
- ✅ Tela de detalhes do usuário
- ✅ Pull to Refresh para atualizar os dados
- ✅ Indicador de carregamento
- ✅ Tratamento de erros de requisição

## 🗂️ Estrutura do Projeto

APIs_REST/ ├── assets/ # Imagens e recursos estáticos (se houver) ├── App.js # Arquivo principal que renderiza UserList ou UserDetails ├── package.json # Dependências e scripts do projeto ├── README.md # Documentação do projeto ├── .gitignore # Arquivos e pastas ignorados pelo Git


### 🧩 Componentes

- **UserList**: Lista de usuários com busca na API, refresh e navegação para detalhes.
- **UserDetails**: Tela com mais informações do usuário selecionado.
- **App**: Controla o estado de navegação entre as telas.

## 🔧 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Random Data API](https://random-data-api.com)

## ▶️ Como Executar o Projeto

### 1. Pré-requisitos

- Node.js instalado
- Expo CLI:
  npm install -g expo-cli

  Emulador Android/iOS ou dispositivo com o app Expo Go

  Clonar o repositório
  
  git clone https://github.com/Erivaldo0505/APIs_REST.git
  cd APIs_REST

 Instalar as dependências
 
 npm install

 Executar o projeto
 npx expo start

 Abra o aplicativo Expo Go no seu celular e escaneie o QR Code exibido no terminal.
 Ou use os atalhos:

 Use o atalho a (para Android) ou i (para iOS) no terminal para abrir no emulador.
    
📌 Observação: Os dados dos usuários são gerados aleatoriamente a cada requisição.
Não é necessário autenticação para uso da API.

## 📄 2. Relatório Técnico

### 🛠️ Processo de Desenvolvimento

O projeto foi desenvolvido com o objetivo de praticar o consumo de APIs REST em um app React Native. Comecei estruturando a aplicação com uma tela principal que lista usuários aleatórios consumidos da API [Random Data API](https://random-data-api.com/). Em seguida, implementei uma navegação simples entre a tela de listagem e os detalhes do usuário selecionado.

Utilizei `useEffect` para buscar os dados assim que a tela carrega e `useState` para gerenciar o estado da lista, carregamento e erros. Também adicionei a funcionalidade de **pull-to-refresh**, permitindo que o usuário atualize a lista deslizando a tela para baixo.

### ⚠️ Desafios Encontrados e Soluções

- **Erro na requisição da API:** Em algumas chamadas, a API retornava uma lista vazia ou com apenas um item. Para resolver isso, ajustei a URL incluindo o parâmetro `?size=10`, garantindo que sempre fossem retornados 10 usuários.
  
- **Imagem de avatar quebrando layout:** Em alguns casos, a imagem do avatar era inválida ou demorava a carregar, o que afetava o visual da lista. Para isso, adicionei um estilo com `borderRadius` e `size fixo`, garantindo que mesmo imagens com erro mantivessem o layout estável.

- **Gerenciamento de estados entre telas:** Para alternar entre a lista e os detalhes, implementei a lógica diretamente no `App.js`, usando um estado `selectedUser` que controla a tela exibida. Isso manteve a navegação leve e sem necessidade de bibliotecas externas.

### 🔄 Fetch vs. Axios

Durante o desenvolvimento, optei por utilizar o `fetch`, que é nativo do JavaScript e já está disponível sem necessidade de instalação. Ele é suficiente para chamadas simples como as desse projeto.

No entanto, vale a pena destacar algumas comparações:

| Característica        | Fetch                         | Axios                                |
|------------------------|-------------------------------|---------------------------------------|
| Instalação             | Nativo, sem instalação        | Requer instalação via `npm` ou `yarn` |
| Suporte a JSON         | Requer `res.json()` manualmente | Já retorna os dados convertidos      |
| Interceptadores        | Não possui                    | Possui interceptadores nativos        |
| Cancelamento de requisições | Complexo                   | Fácil de usar com `CancelToken`       |

Se o projeto crescesse ou tivesse autenticação, tratamentos globais de erro ou loading, o Axios provavelmente seria a escolha mais robusta.

---

Esse relatório visa compartilhar de forma transparente as etapas e aprendizados obtidos com a construção do app, reforçando a importância de práticas simples, mas bem estruturadas.

Feito por: Erivaldo505
 

