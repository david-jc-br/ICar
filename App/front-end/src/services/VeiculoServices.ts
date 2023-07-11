import axios from "axios";

export async function getAllVeiculos() {
    try {
        const response = await axios.get('https://localhost:3001/veiculos/');
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching cars.');
    }
}

export async function criarVeiculo(newData: any) {
    try {
        const response = await axios.post('https://localhost:3001/veiculos/', newData);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

export async function atualizarVeiculo(placa: string) {
    try {
        const response = await axios.put(`https://localhost:3001/veiculos/${placa}`);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

export async function deletarVeiculo(placa: string) {
    try {
        const response = await axios.delete(`https://localhost:3001/veiculos/${placa}`);
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

export async function getVeiculoPorPlaca(placa: string) {
    try {
        const response = await axios.get(`https://localhost:3001/veiculos/${placa}`);
        const data = response.data;
        return data;
    } catch (error: any) {
        console.error(error);
        throw new Error("Veiculo não encontrado");
    }
}
