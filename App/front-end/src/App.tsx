import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import Principal from './pages/PrincipalPage';
import Login from './pages/LoginPage';
import CadastrarPessoa from './pages/CadastrarPessoaPage';
import EsqueciSenha from './pages/EsqueciSenhaPage';
import PrincipalCliente from './pages/PrincipalClientePage';
import ExcluirPessoa from './pages/ExcluirPessoaPage';

import CadastrarVeiculo from './pages/CadastrarVeiculoPage';
import ExcluirVeiculo from './pages/ExcluirVeiculoPage';
import AtualizarVeiculo from './pages/AtualizarVeiculoPage';
import VisualizarVeiculos from './pages/VisualizarVeiculosPage';
import PageNotFound from './pages/PageNotFound';

import Alugar from './pages/AlugarPage';
import Perfil from './pages/PerfilPage';
//import VisualizarAlugueis from './pages/VisualizarAlugueisPage'

// components 
import NavBarComponet from './components/NavBarComponent';
import VisualizarAlugueis from './pages/VisualizarAlugueisPage';

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
          <Route path="perfil" element={<Perfil/>} />
          <Route path="principalCliente" element={<PrincipalCliente/>} />
          <Route path="excluirPessoa" element={<ExcluirPessoa/>} />

          <Route path="cadastrarVeiculo" element={<CadastrarVeiculo />} />
          <Route path="excluirVeiculo" element={<ExcluirVeiculo/>} />
          <Route path="alugar/:placa" element={<Alugar/>} />
          <Route path="atualizarVeiculo" element={<AtualizarVeiculo/>} />
          <Route path="visualizarVeiculos" element={<VisualizarVeiculos/>} />
          <Route path="visualizarAlugueis" element={<VisualizarAlugueis/>} />

          {/* <Route path="visualizarAlugueis" element={<VisualizarAlugueis/>} /> */}
          
          <Route path="*" element={<PageNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
