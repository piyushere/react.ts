import React from 'react';

export interface ICounterContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const CounterContext = React.createContext<ICounterContext>({
  count: 0,
  setCount: () => {
    console.log('I am the default routine');
  },
});

export default CounterContext;
