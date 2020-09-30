import React from 'react';
import GlobalStyle from './styles/global';
import Router from './utils/Router';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
