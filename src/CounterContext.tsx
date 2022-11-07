import React from 'react';
import CounterContext from './counter';

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = React.useState(11);
  const contextState = React.useMemo(
    () => ({ count, setCount }),
    [count, setCount]
  );

  return (
    <CounterContext.Provider value={contextState}>
      {children}
    </CounterContext.Provider>
  );
};

export const CounterConsumer = () => {
  return React.useContext(CounterContext);
};
