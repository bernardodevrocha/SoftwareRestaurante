import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pedidos(){
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPedidos = async() => {
      try{
        const response = await axios.get('http://localhost:3001/pedidos');
        setPedidos(response.data);
        setLoading(false);
      } catch(err){
        setError('Erro ao carregar os pedidos');
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  const atualizaStatusPedidos = async(id, novoStatus)=> {
    try{
      await axios.patch(`http://localhost:3001/pedidos/${id}`, {
        status: novoStatus,
      });
      setPedidos((prevPedidos) =>
        prevPedidos.map((pedido) =>
          pedido.id === id ? { ...pedido, status: novoStatus } : pedido
        )
      );
    }catch(err){
      setError('Erro ao atualizar o status!');
    }
  };

  if(loading) return <p>Carregando Pedidos!</p>
  if(error) return <p>Erro ao carregar pedidos!</p>

  return(
    <div>
      <h1>Gerenciador de Pedidos!</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            <strong>{pedido.descricao}</strong> - <em>Status: {pedido.status}</em>
            <br />
            <button onClick={() => atualizaStatusPedidos(pedido.id, 'a fazer')}>
              A Fazer
            </button>
            <button onClick={() => atualizaStatusPedidos(pedido.id, 'pronto')}>
              Pronto
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pedidos;