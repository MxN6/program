// src/utils/web3.js ыда я скопировал
import Web3 from 'web3';

let web3;

if (window.ethereum) {
  // Используем Ethereum provider от MetaMask
  web3 = new Web3(window.ethereum);
  window.ethereum.enable(); // Запрашиваем доступ к аккаунтам
} else {
  // Фоллбэк для локального провайдера
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
}

export default web3;