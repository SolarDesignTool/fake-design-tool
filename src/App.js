import React from 'react';
import { DesignTool } from './components/DesignTool'
import './App.css';

function App() {
  const parameters = {
    internalReferenceId: Math.floor(Math.random() * 10000),
    salespersonName: 'Li Jin',
    projectId: 'random project id',
    jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
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
