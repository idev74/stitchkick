import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ClickCounter from './components/ClickCounter';

export default function App() {
  return (
    <Provider store={store}>
      <ClickCounter />
    </Provider>
  );
}
