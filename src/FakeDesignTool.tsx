import * as React from 'react';
// import { FakeDesignToolProps } from './index';

const FakeDesignTool = (props: any) => {
  const { internalReferenceId, salespersonName, projectId, jwtToken, generateNewTokenCallback } = props;
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
            {jwtToken}
          </div>
        </div>
        <div className="item">
          <button onClick={generateNewTokenCallback}>
            Request New Auth Token
          </button>
        </div>
      </div>
    </div>
  );
};

export { FakeDesignTool };
