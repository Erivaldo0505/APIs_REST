# APIs_Rest

Este projeto consiste em um aplicativo mobile desenvolvido em React Native usando Expo. O objetivo do app é listar criptomoedas com suas respectivas cotações e fornecer detalhes sobre cada uma delas. Os dados são obtidos por meio da API CoinGecko.

📌 Funcionalidades

Listagem das principais criptomoedas do mercado com nome, ícone e preço atual.

Exibição de detalhes de uma criptomoeda selecionada, incluindo descrição e preço atualizado.

Interface responsiva e com tema escuro para melhor experiência do usuário.

🛠️ Tecnologias Utilizadas

React Native

Expo (para facilitar o desenvolvimento e teste)

API CoinGecko (para obter os dados das criptomoedas)

Styled Components (para estilização)

🚀 Como Executar o Projeto

1️⃣ Requisitos

Ter o Node.js instalado na máquina

Ter o Expo CLI instalado globalmente (npm install -g expo-cli)

Um emulador Android/iOS ou o aplicativo Expo Go instalado no celular

2️⃣ Clonar o repositório

  git clone https://github.com/Erivaldo0505/APIs_REST.git
  cd APIs_REST

Ou utilize:

  git@github.com:Erivaldo0505/APIs_REST.git

Ou via GitHub CLI:

  gh repo clone Erivaldo0505/APIs_REST

3️⃣ Instalar dependências

  npm install

4️⃣ Iniciar o projeto

  expo start

Com isso, você pode escanear o QR Code gerado no terminal com o Expo Go ou rodar o app no emulador.

📂 Estrutura do Projeto

APIs_REST/
│-- src/
│   ├── components/   # Componentes reutilizáveis
│   ├── screens/      # Telas do aplicativo
│   ├── styles/       # Estilos globais
│   ├── services/     # Consumo da API
│   ├── App.js        # Arquivo principal do aplicativo
│-- assets/           # Ícones e imagens
│-- package.json      # Dependências do projeto
│-- README.md         # Documentação do projeto

🔗 API Utilizada

Os dados são obtidos da API gratuita da CoinGecko:

Listagem de moedas: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

Detalhes de uma moeda: https://api.coingecko.com/api/v3/coins/{id}

📜 Licença

Este projeto está licenciado sob a GPL-3.0 License. Sinta-se à vontade para contribuir! 😊



## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
