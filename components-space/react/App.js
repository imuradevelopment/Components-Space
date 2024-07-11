import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="flex-container">
      <div className="button-group">
        <Button label="Primary S" size="small" color="#007bff" />
        <Button label="Primary M" size="medium" color="#007bff" />
        <Button label="Primary L" size="large" color="#007bff" />
      </div>
      <div className="button-group">
        <Button label="Secondary S" size="small" color="#6c757d" />
        <Button label="Secondary M" size="medium" color="#6c757d" />
        <Button label="Secondary L" size="large" color="#6c757d" />
      </div>
      <div className="button-group">
        <Button label="Success S" size="small" color="#28a745" />
        <Button label="Success M" size="medium" color="#28a745" />
        <Button label="Success L" size="large" color="#28a745" />
      </div>
      <div className="button-group">
        <Button label="Danger S" size="small" color="#dc3545" />
        <Button label="Danger M" size="medium" color="#dc3545" />
        <Button label="Danger L" size="large" color="#dc3545" />
      </div>
      <div className="button-group">
        <Button label="Warning S" size="small" color="#ffc107" />
        <Button label="Warning M" size="medium" color="#ffc107" />
        <Button label="Warning L" size="large" color="#ffc107" />
      </div>
      <div className="button-group">
        <Button label="Info S" size="small" color="#17a2b8" />
        <Button label="Info M" size="medium" color="#17a2b8" />
        <Button label="Info L" size="large" color="#17a2b8" />
      </div>
    </div>
  );
}

export default App;
