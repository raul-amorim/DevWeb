import React, { useState } from 'react';
import axios from 'axios';

const URL = '';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${URL}/signin`, {
        username,
        password,
      });

      console.log('Resposta do servidor:', response.data);

      // Redirecionar para página inicial e armazenar o token no localstorage
      // localStorage.setItem('authToken', response.data.token);

      setUsername('');
      setPassword('');
    } catch (err) {
      setError('Erro ao tentar fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}

        <div>
          <label htmlFor="username">Usuário</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Digite seu usuário" 
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Digite sua senha" 
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;
