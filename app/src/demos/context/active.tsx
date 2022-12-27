import React, { useContext } from 'react';
import { DemoContext } from './config';

const Active = () => {
  const { dispatch } = useContext(DemoContext) as any;

  return (
    <React.Fragment>
      <div onClick={() => dispatch({ type: 'add' })}>+</div>
      <div onClick={() => dispatch({ type: 'reduce' })}>-</div>
    </React.Fragment>
  )
};

export default Active;
