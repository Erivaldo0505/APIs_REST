# Crypto Tracker App

Este projeto consiste em um aplicativo mobile desenvolvido em **React Native** usando **Expo**. O objetivo do app é listar criptomoedas com suas respectivas cotações e fornecer detalhes sobre cada uma delas. Os dados são obtidos por meio da API **CoinGecko**.

## 📌 Funcionalidades

- Listagem das principais criptomoedas do mercado com nome, ícone e preço atual.
- Exibição de detalhes de uma criptomoeda selecionada, incluindo descrição e preço atualizado.
- Interface responsiva e com tema escuro para melhor experiência do usuário.

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo** (para facilitar o desenvolvimento e teste)
- **API CoinGecko** (para obter os dados das criptomoedas)
- **Styled Components** (para estilização)

## 🚀 Como Executar o Projeto

### 1️⃣ Requisitos
- Ter o **Node.js** instalado na máquina
- Ter o **Expo CLI** instalado globalmente (`npm install -g expo-cli`)
- Um emulador Android/iOS ou o aplicativo **Expo Go** instalado no celular

### 2️⃣ Clonar o repositório
```sh
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
🖥️ Código do Projeto

Abaixo está o código principal do projeto App.js:

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CryptoList = ({ onSelectCrypto }) => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => response.json())
      .then((data) => {
        setCryptos(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar os dados');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00aaff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Criptomoedas</Text>
      </View>
      <FlatList
        data={cryptos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectCrypto(item.id)}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.icon} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.current_price.toFixed(2)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CryptoDetails = ({ cryptoId, onGoBack }) => {
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}`)
      .then((response) => response.json())
      .then((data) => {
        setCrypto(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar os detalhes');
        setLoading(false);
      });
  }, [cryptoId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#00aaff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {crypto && (
        <View style={styles.detailCard}>
          <Image source={{ uri: crypto.image.large }} style={styles.largeIcon} />
          <Text style={styles.name}>{crypto.name}</Text>
          <Text style={styles.price}>${crypto.market_data.current_price.usd.toFixed(2)}</Text>
          <Text style={styles.description}>{crypto.description.en.split('. ')[0]}</Text>
        </View>
      )}
      <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedCryptoId, setSelectedCryptoId] = useState(null);

  return (
    <View style={styles.container}>
      {selectedCryptoId ? (
        <CryptoDetails cryptoId={selectedCryptoId} onGoBack={() => setSelectedCryptoId(null)} />
      ) : (
        <CryptoList onSelectCrypto={(id) => setSelectedCryptoId(id)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#ff0000',
  },
  header: {
    padding: 15,
    backgroundColor: '#111111',
    borderRadius: 5,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#2b2b2b',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  price: {
    fontSize: 16,
    color: '#00aaff',
    fontWeight: 'bold',
  },
  largeIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  detailCard: {
    backgroundColor: '#2b2b2b',
    padding: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  description: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 10,
    textAlign: 'center',
  },
  goBackButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#333333',
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default App;

