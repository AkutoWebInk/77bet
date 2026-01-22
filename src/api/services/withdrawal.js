import { API_PATH2 } from "../api";

// API
export async function requestWithdrawal(data) {
    const response = await fetch (`${API_PATH2}/transactions/withdraw`, 
        {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Withdrawal Result', result);
        return result;
}