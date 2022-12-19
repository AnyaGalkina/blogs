import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './app/App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';


const Global = createGlobalStyle`
  //* {
  //  margin: 0;
  //  padding: 0;
  //  box-sizing: border-box;
  //  //font-family: ;
  //}
`;

const theme = {
    colors: {
        primary: 'black',
        secondary: '#fff',
        admin: '#f9346b'
    },
    backgroundColor: {
        primary:"",
        secondary: '#f9346b',
    },
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Global/>
                <App/>
            </ThemeProvider>
        </Provider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
