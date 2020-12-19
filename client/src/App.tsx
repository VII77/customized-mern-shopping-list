import React, { useEffect } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { store, persistor } from './flux/store';
import { Provider } from 'react-redux';
import { loadUser } from './flux/actions/authActions';
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}> 
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
