import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import Principal from './pages/PrincipalPage';
import Login from './pages/LoginPage';
import CadastrarPessoa from './pages/CadastrarPessoaPage';
import EsqueciSenha from './pages/EsqueciSenhaPage';
import CadastrarVeiculo from './pages/CadastrarVeiculoPage';
import PageNotFound from './pages/PageNotFound';
import ExcluirVeiculo from './pages/ExcluirVeiculoPage';
import AtualizarVeiculo from './pages/AtualizarVeiculoPage';

// components 
import Header from './components/HeaderComponent';

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
          <Route path="atualizarVeiculo" element={<AtualizarVeiculo/>} />
  
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
