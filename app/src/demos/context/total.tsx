import React, {
  useContext,
} from 'react';
import { DemoContext } from './config';

const Total = () => {
  const { state } = useContext(DemoContext) as any;

  return (
    <div>total: {state.total}</div>
  )
};

export default Total;
