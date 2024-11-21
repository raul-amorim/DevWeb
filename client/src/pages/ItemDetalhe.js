import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const URL = '';

class ItemDetalhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`${URL}/${id}`)
      .then(response => {
        this.setState({
          item: response.data,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Erro ao carregar o item:', error);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { item, loading } = this.state;

    if (loading) {
      return <div>Carregando detalhes...</div>;
    }

    if (!item) {
      return <div>Item não encontrado.</div>;
    }

    return (
      <div>
        <h1>Detalhes do Item</h1>
        <p><strong>Nome:</strong> {item.nome}</p>
        <p><strong>Descrição:</strong> {item.descricao}</p>
        <p><strong>Preço:</strong> {item.preco}</p>
      </div>
    );
  }
}

// Utilizando o hook useParams do React Router para obter o id da URL
const ItemDetalheWrapper = (props) => {
  const params = useParams();
  return <ItemDetalhe {...props} match={{ params }} />;
};

export default ItemDetalhe;