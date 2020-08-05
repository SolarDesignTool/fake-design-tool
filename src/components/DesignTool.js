import React, { useState } from 'react';
import './DesignTool.css';

const DesignTool = (props) => {
  const { internalReferenceId, salespersonName, projectId, jwtToken } = props;
  const [newToken, setNewToken] = useState('');

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
    <div className="container">
      <div className="values">
        <div className="item">
          <div>
            Internal Reference Id:
          </div>
          <div>
            {internalReferenceId}
          </div>
        </div>
        <div className="item">
          <div>
            Sales Person Name:
          </div>
          <div>
            {salespersonName}
          </div>
        </div>
        <div className="item">
          <div>
            Project Id:
          </div>
          <div>
            {projectId}
          </div>
        </div>
        <div className="item">
          <div>
            JWT Token:
          </div>
          <div>
            {newToken || jwtToken}
          </div>
        </div>
        <div className="item">
          <button onClick={generateNewToken}>
            Request New Auth Token
          </button>
        </div>
      </div>
    </div>
  );
};

export { DesignTool };
