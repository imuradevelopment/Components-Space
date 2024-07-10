import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>React Component</h1>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
