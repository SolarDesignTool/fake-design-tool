import React from 'react';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <Card>
        <div style={{ height: 200}}>
          Card Content
        </div>
      </Card>
    </div>
  );
}

export default App;
