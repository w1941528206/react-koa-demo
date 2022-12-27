import React, {
  createContext,
  useReducer,
} from 'react';
import Active from './active';
import Total from './total';
import { DemoContext } from './config';
const Context = () => {
  const initialState = { total: 0 };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          total: state.total + 1
        };
      case 'reduce':
        return {
          ...state,
          total: state.total - 1
        };;
      default:
        return {};
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      <Active />
      <Total />
    </DemoContext.Provider>
  )
};

export default Context;
