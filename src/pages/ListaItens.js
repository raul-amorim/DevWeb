import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', price: 10.00, stock: 100 },
  { id: 2, name: 'Item 2', price: 20.00, stock: 50 },
  { id: 3, name: 'Item 3', price: 15.00, stock: 75 },
];

function ListaItens() {
  return (
    <div className="item-list">
      <h1>Lista de Itens</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaItens;


/*
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}
export default Page
 */