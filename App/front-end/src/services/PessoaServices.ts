
import axios from "axios";
import { errorType } from "./VeiculoServices";

export async function criarCliente(newData: any) {
    try {
        const response = await axios.post('https://localhost:3001/pessoas/cliente', newData);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

export async function criarFuncionario(newData: any) {
    try {
        const response = await axios.post('https://localhost:3001/pessoas/funcionario', newData);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}


export async function getPessoaPorCpf(cpf: string) {
    try {
        const response = await axios.get(`https://localhost:3001/pessoa/one/${cpf}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error not found people.');
    }
}

export async function deletarPessoa(cpf: string) {
    try {
        const response = await axios.delete(`https://localhost:3001/pessoa/${cpf}`);
        return response.data;
    } catch (error: any) {
        console.error(error);
        errorType(error);
    }
}
