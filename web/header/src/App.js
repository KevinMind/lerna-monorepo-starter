import React from 'react';
import { Header } from "@smava-ui/core";

const App = () => (
  <div style={{ width: '100%' }}>
    <Header
      isFlat={false}
      onLogoClick={e => {
        e.preventDefault();
        console.log(e)
      }}
      logoLinkUrl="http://www.google.com"
      renderAccount={() => <div>account</div>}
      renderAdvice={() => <div>advice</div>}
      renderRightContent={() => <div>right content</div>}
      showAdvice={true}
      />
  </div>
);

export default App;
