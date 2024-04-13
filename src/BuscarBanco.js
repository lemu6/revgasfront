// BuscarBanco.js
import React, { useState } from 'react';
import axios from 'axios';

function BuscarBanco() {
  const [codigo, setCodigo] = useState('');
  const [bancoEncontrado, setBancoEncontrado] = useState(null);
  const [erro, setErro] = useState(null);

  const buscarBancoPorCodigo = async () => {
    try {
      const response = await axios.get(`http://localhost:8687/${codigo}`);
      setBancoEncontrado(response.data);
      setErro(null);
    } catch (error) {
      setBancoEncontrado(null);
      setErro('Banco não encontrado');
    }
  };

  return (
    <div>
      <h2>Buscar Banco por Código de Compensação</h2>
      <input
        type="text"
        placeholder="Digite o código de compensação"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <button onClick={buscarBancoPorCodigo}>Buscar</button>
      {erro && <p>{erro}</p>}
      {bancoEncontrado && (
        <div>
          <h3>Banco Encontrado</h3>
          <p>Código de Compensação: {bancoEncontrado.codigo_compensacao}</p>
          <p>Nome da Instituição: {bancoEncontrado.nome_instituicao}</p>
          {/* Adicione outros campos conforme necessário */}
        </div>
      )}
    </div>
  );
}

export default BuscarBanco;
