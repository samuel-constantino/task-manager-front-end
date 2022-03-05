import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Common
import App from './App/index';
import Register from './Pages/Register/index';
import Login from './Pages/Login/index';
import NotFound from './Pages/NotFound/index';
import Tasks from './Pages/Tasks/index';
import Task from './Pages/Task/index';

const getRoutes = () => (
  <Routes>
    <Route path="/" element={ <App /> }>
      <Route path="register" element={ <Register /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="tasks" element={ <Tasks /> }>
        <Route index element={ <div>Selecione uma task</div> } />
        <Route path=":id" element={ <Task /> } />
      </Route>
    </Route>
    <Route path="*" element={ <NotFound /> } />
  </Routes>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      { getRoutes() }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
