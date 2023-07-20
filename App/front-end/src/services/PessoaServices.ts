
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



