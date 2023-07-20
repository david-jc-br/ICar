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
import VisualizarVeiculos from './pages/VisualizarVeiculosPage';
import PrincipalCliente from './pages/PrincipalClientePage';
import Alugar from './pages/AlugarPage';
import Perfil from './pages/PerfilPage';

// components 
import NavBarComponet from './components/NavBarComponent';

const MemoizedNavBar = React.memo(NavBarComponet);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MemoizedNavBar />}
        >
          <Route index element={<Principal />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastrarPessoa" element={<CadastrarPessoa />} />
          <Route path="esqueciSenha" element={<EsqueciSenha />} />
          <Route path="cadastrarVeiculo" element={<CadastrarVeiculo />} />
          <Route path="excluirVeiculo" element={<ExcluirVeiculo/>} />
          <Route path="alugar/:placa" element={<Alugar/>} />
          <Route path="perfil" element={<Perfil/>} />
          <Route path="atualizarVeiculo" element={<AtualizarVeiculo/>} />
          <Route path="principalCliente" element={<PrincipalCliente/>} />
          <Route path="visualizarVeiculos" element={<VisualizarVeiculos/>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
