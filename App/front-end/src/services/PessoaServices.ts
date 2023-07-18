import axios from "axios";

export async function criarPessoa(newData: any) {
    try {
        const response = await axios.post('https://localhost:3001/pessoa/', newData);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

export async function atualizarPessoa(cpf: string, novosDados: any) {
    try {
        const response = await axios.put(`https://localhost:3001/pessoa/${cpf}`, novosDados );
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
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

export function errorType(error: any) {
    if (error.response.status === 400) {
        throw new Error("Bad request error");
    } else if (error.response.status === 500) {
        throw new Error("Internal server error");
    } else {
        throw new Error("Unknown error");
    }
}