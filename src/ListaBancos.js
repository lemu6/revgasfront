import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function ListaBancos() {
  const [bancos, setBancos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarBancos = async () => {
      try {
        const response = await axios.get('http://localhost:8687');
        setBancos(response.data);
        setErro(null);
      } catch (error) {
        console.error('Erro ao obter lista de bancos:', error);
        setErro('Erro ao carregar lista de bancos');
      }
    };

    carregarBancos();
  }, []);

  return (
    <div className="list-container">
      <h2>Lista de Bancos</h2>
      {erro && <p>{erro}</p>}
      <ul>
        {bancos.map(banco => (
          <li key={banco.codigo_compensacao} className="bank-item">
            <p>Código de Compensação: {banco.codigo_compensacao}</p>
            <p>Nome da Instituição: {banco.nome_instituicao}</p>
            {/* Adicione outros campos conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaBancos;
