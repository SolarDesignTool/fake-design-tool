import * as React from 'react';

export interface FakeDesignToolProps extends React.Props<FakeDesignTool> {
  internalReferenceId: string;
  salespersonName: string;
  projectId: string;
  jwtToken: string;
  generateNewTokenCallback: any;
}

declare class FakeDesignTool extends React.Component<FakeDesignToolProps, any> {
}

declare module 'fake-design-tool' {
}

export default FakeDesignTool;
