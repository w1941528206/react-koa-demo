import React, {
  useState
} from 'react';
import _ from 'lodash';
import Menu from './components/menu';
import { Link } from 'react-router-dom';

const App: React.FC<any> = (): React.ReactElement => {
  return (
    <div>
      <Menu />
    </div>
  )
};

export default App;
