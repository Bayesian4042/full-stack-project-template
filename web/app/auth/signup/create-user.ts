"use server";

import { API_URL } from "@/constants/api";
import { getErrorMessage } from "@/utils/errorMessages";
import { redirect } from "next/navigation";

async function createUser(
    formData: any
) {
    const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        body: formData,
    });
    console.log(response);
    const parsedResponse = response.json();

    
    if (!response.ok) {
        return { error: getErrorMessage(parsedResponse) };
    }
    
    redirect("/");
}

export default createUser;


