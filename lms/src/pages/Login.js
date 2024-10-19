import React, { useState } from 'react';
import { login } from '../services/authService'; // Импорт функции login из authService
import web3 from '../utils/web3'; // Импорт настроенного Web3

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }); // Используем функцию login из authService
      setUser(res.username);
      localStorage.setItem('token', res.token);
      if (walletAddress) {
        localStorage.setItem('walletAddress', walletAddress); // Сохраняем адрес кошелька
      }
    } catch (err) {
      setError('Login failed. Try again.');
    }
  };

  const handleConnectWallet = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]); // Сохраняем адрес кошелька
        console.log('Connected account:', accounts[0]);
      } else {
        setError('Please connect to MetaMask.');
      }
    } catch (error) {
      console.error('Failed to connect to wallet:', error);
      setError('Failed to connect to wallet. Try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
    </div>
  );
};

export default Login;
