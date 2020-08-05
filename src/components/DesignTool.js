import React from 'react';
import './DesignTool.css';

const DesignTool = (props) => {
  const { internalReferenceId, salespersonName, projectId, jwtToken } = props;
  return (
    <div className="container">
      <div className="values">
        <p>
          Internal Reference Id: {internalReferenceId}
        </p>
        <p>
          Sales Person Name: {salespersonName}
        </p>
        <p>
          Project Id: {projectId}
        </p>
        <p>
          JWT Token: {jwtToken}
        </p>
      </div>
    </div>
  );
};

export { DesignTool };
