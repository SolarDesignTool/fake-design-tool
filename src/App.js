import React from 'react';
import { DesignTool } from './components/DesignTool'
import './App.css';

function App() {
  const parameters = {
    internalReferenceId: Math.floor(Math.random() * 10000),
    salespersonName: 'Li Jin',
    projectId: 'random project id',
    jwtToken: 'random token'
  }
  return (
    <div className="App">
      <DesignTool
        internalReferenceId={parameters.internalReferenceId}
        salespersonName={parameters.salespersonName}
        projectId={parameters.projectId}
        jwtToken={parameters.jwtToken}
      />
    </div>
  );
}

export default App;
