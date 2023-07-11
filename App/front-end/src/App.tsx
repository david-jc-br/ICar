import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import Principal from './pages/PrincipalPage';
import Login from './pages/LoginPage';
import CadastrarPessoa from './pages/CadastrarPessoaPage';
import EsqueciSenha from './pages/EsqueciSenhaPage';
import CadastrarVeiculo from './pages/CadastrarVeiculoPage';
import PageNotFound from './pages/PageNotFound';

// components 
import Header from './components/HeaderComponent';
import ExcluirVeiculo from './pages/ExcluirVeiculoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Principal />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastroPessoa" element={<CadastrarPessoa />} />
          <Route path="esqueciSenha" element={<EsqueciSenha />} />
          <Route path="cadastrarVeiculo" element={<CadastrarVeiculo />} />
          <Route path="excluirVeiculo" element={<ExcluirVeiculo/>} />
  
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;