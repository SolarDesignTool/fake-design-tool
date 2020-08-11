import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FakeDesignTool } from './components/FakeDesignTool'
import './index.css';

function App() {
  const [newToken, setNewToken] = useState('');

  const parameters = {
    internalReferenceId: Math.floor(Math.random() * 10000),
    salespersonName: 'Li Jin',
    projectId: 'random project id',
    jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  }

  const generateNewToken = () => {
    var token           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 156; i++ ) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setNewToken(token);
  }

  return (
    <div className="App">
      <FakeDesignTool
        internalReferenceId={parameters.internalReferenceId}
        salespersonName={parameters.salespersonName}
        projectId={parameters.projectId}
        jwtToken={newToken || parameters.jwtToken}
        generateNewTokenCallback={generateNewToken}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
