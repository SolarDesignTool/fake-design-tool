import React from 'react';
import './DesignTool.css';

const DesignTool = (props) => {
  const { internalReferenceId, salespersonName, projectId, jwtToken, newToken, generateNewToken } = props;
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
