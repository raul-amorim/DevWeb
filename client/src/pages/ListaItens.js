import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = '';

class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get(`${URL}/`)
      .then(response => {
        this.setState({
          items: response.data,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Erro ao carregar os itens:', error);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <div>Carregando...</div>;
    }

    return (
      <div>
        <h1>Lista de Itens</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/${item.id}`}>{item.nome}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaItens;
