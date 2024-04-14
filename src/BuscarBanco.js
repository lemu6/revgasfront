import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

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
    <div className="container">
      <h2>Buscar Banco por Código de Compensação</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite o código de compensação"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={buscarBancoPorCodigo}>Buscar</button>
      </div>
      {erro && <p className="error">{erro}</p>}
      {bancoEncontrado && (
        <div className="bank-info">
          <h3>Banco Encontrado</h3>
          <p><strong>Código de Compensação:</strong> {bancoEncontrado.codigo_compensacao}</p>
          <p><strong>Nome da Instituição:</strong> {bancoEncontrado.nome_instituicao}</p>
          {/* Adicione outros campos conforme necessário */}
        </div>
      )}
    </div>
  );
}

export default BuscarBanco;
