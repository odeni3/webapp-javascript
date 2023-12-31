import React, { useState } from 'react';
import '/src/styles/Obra.css';
import Card2 from '../InfoEmployee/Card2';

export function ObrasFuncionario() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(true);
  const [sixth, setSixth] = useState(true);


  const handleChange = (checkboxName) => {
    switch (checkboxName) {
      case 'first':
        setFirst(!first);
        break;
      case 'second':
        setSecond(!second);
        break;
      case 'third':
        setThird(!third);
        break;
      case 'fourth':
        setFourth(!fourth);
        break;
      case 'fifth':
        setFifth(!fifth);
        break;
      case 'sixth':
        setSixth(!sixth);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className='bemvindo'>
        <h1> QUADRO DE OBRAS (INDIVIDUAL)</h1>
      </div>
      <div className='texto'>
        <p> Obra que você está trabalhando: (HUGO) </p>
      </div>
      <div className='leparc'>
        <Card2
          title='Le Parc'
          imageUrl='https://cdn-biasi.blueintra.com/images/lot/13/10/500/1310552.jpg'
        />
      </div>
      <div className='checklist-container'>
        <div className='checklist-item'>
          <input type="checkbox" checked={first} onChange={() => handleChange('first')} />
          <label>Planificar novo terreno.</label>
        </div>
        <div className='checklist-item'>
          <input type="checkbox" checked={second} onChange={() => handleChange('second')} />
          <label>Construir base da edificação.</label>
        </div>
        <div className='checklist-item'>
          <input type="checkbox" checked={third} onChange={() => handleChange('third')} />
          <label>Levantamento da edificação.</label>
        </div>
        <div className='checklist-item'>
          <input type="checkbox" checked={fourth} onChange={() => handleChange('fourth')} />
          <label>Construir elevador geral.</label>
        </div>
        <div className='checklist-item'>
          <input type="checkbox" value={fifth} onChange={() => handleChange('fifth')} />
          <label>Construir área da piscina.</label>
        </div>
        <div className='checklist-item'>
          <input type="checkbox" value={sixth} onChange={() => handleChange('sixth')} />
          <label>Construir área do churrasco.</label>
        </div>
      </div>
    </div>
  );
}

export default ObrasFuncionario;
