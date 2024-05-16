import { ThemeProvider } from '@emotion/react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getUser } from './State/Authentication/Action';
import { store }  from './State/store.js'
import { findCart } from './State/Cart/Action.js';
import Routers from './Routers/Routers';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store => store);

  useEffect(()=> {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routers />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
