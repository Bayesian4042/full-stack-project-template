"use server";

import { API_URL } from "@/constants/api";
import { getErrorMessage } from "@/utils/errorMessages";

async function loginUser(
    formData: any
) {
     const response: any = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response) {
        return { };
    }

    const data = await response.json();
    return data.access_token;    
}

export default loginUser;