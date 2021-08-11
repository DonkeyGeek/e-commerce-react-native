import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppNav from './routes/AppNav'


export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
