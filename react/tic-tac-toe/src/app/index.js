import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from '../redux/store';

import Routes from './components/Routes';

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AppContainer>
  );
}

export default App;
