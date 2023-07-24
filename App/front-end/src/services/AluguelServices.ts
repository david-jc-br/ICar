import axios from "axios";
import { errorType } from "./VeiculoServices";

export async function getAlugueis() {
    try {
        const response = await axios.get('https://localhost:3001/alugueis');
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}