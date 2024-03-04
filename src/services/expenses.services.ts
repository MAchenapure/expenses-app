import { Expense } from "../entities/expense.entity";
import { HttpMethodTypes, useFetch } from "./use-fetch";

export const getUserExpenses = async (userId: string): Promise<Expense[]> => {
    const apiUrl = new URL(`${import.meta.env.VITE_EXPENSES_API}/expenses/find?user=${userId}`);
    const response: { expenses: Expense[] } = await useFetch(apiUrl, HttpMethodTypes.GET);
    console.log(response);
    return response.expenses;
}