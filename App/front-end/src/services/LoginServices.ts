import axios from "axios";

export const login = async (cpf: string, senha: string) => {
    try {
        const response = await axios.post("https://localhost:3001/login", {
            cpf,
            senha,
        });
        return response.data;
    } catch (error:any) {
        if (error.response.status === 404) {
            throw new Error("CPF ou Senha inválidos");
        }
    }
};