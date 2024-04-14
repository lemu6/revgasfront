import React from 'react';
import ListaBancos from './ListaBancos';
import BuscarBanco from './BuscarBanco';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      backgroundColor: '#777777', // cinza um pouco mais escuro
      fontFamily: 'sans-serif' // fonte sans-serif
    }}>
      <BuscarBanco />
      <ListaBancos />
    </div>
  );
}

export default App;
