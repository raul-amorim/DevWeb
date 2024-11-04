import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', price: 10.00, stock: 100 },
  { id: 2, name: 'Item 2', price: 20.00, stock: 50 },
  { id: 3, name: 'Item 3', price: 15.00, stock: 75 },
];

function ItemDetalhe() {
  const { id } = useParams();
  const item = items.find(i => i.id === parseInt(id));

  if (!item) {
    return <h2>Item não encontrado</h2>;
  }

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <p>Estoque: {item.stock}</p>
    </div>
  );
}

export default ItemDetalhe;
