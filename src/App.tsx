import { useState } from 'react';
import './App.css';
import Todos from './Todos/Todos';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Todos />
    </div>
  );
}

export default App;
