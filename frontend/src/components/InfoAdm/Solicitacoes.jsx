import React, { useState, useEffect } from 'react';
import SolicitacoesHH from './Cards/SolicitacoesHH';
import Solicicacoes from '../InfoEmployee/Solicicacoes';
import axios from 'axios';

export function Solicitacoes() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/visualizar')
      .then(function (response) {
        const solici = response.data;
        console.log(solici);
        setNome(solici.nome);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className='app'>
      <h1>SOLICITAÇÕES DE FUNCIONÁRIOS</h1>
      <SolicitacoesHH
        title='1- Material extra'
        imageUrl=''
        body='Precisamos de um novo carregamento de tijolos e argamassa para reparos estruturais na garagem do bloco C em nossa obra do LeParc. Temos indícios que o clima úmido comprometeu a estrutura, fazendo-se necessário reparos.'
        funcionario='Funcionário: HUGO ALEXSANDERSON'
      />

      <SolicitacoesHH
        title='2- Mão de obra extra'
        imageUrl=''
        body='Tendo em vista os curtos prazos que foram destinados a nossas recentes obras de grande porte, solicitamos dois novos profissionais na função de operadores de máquinas para normalizar nossa eficiência nas obras.'
        funcionario='Funcionário: YURI LIMA'
      />
      <SolicitacoesHH
        title="?"
        imageUrl=''
        body='?'
        funcionario='Funcionário: ?'
      />
    </div>
  );
}

export default Solicitacoes;