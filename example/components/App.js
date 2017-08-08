import React from 'react';
import {
  Header,
  Sidebar
} from '../../src/dist';

import './styles.scss';

const App = () => {
  return (
    <div className='app-continer'>
      <Sidebar header='Suuup' />
      <Header />
    </div>
  )
}

export default App;
