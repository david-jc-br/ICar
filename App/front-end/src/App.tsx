import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import Principal from './pages/PrincipalPage';
import Login from './pages/LoginPage';
import CadastroPessoa from './pages/CadastroPessoaPage';
import EsqueciSenha from './pages/EsqueciSenhaPage';
import PageNotFound from './pages/PageNotFound';
import Header from './components/HeaderComponent';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Principal />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastroPessoa" element={<CadastroPessoa />} />
          <Route path="esqueciSenha" element={<EsqueciSenha />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
