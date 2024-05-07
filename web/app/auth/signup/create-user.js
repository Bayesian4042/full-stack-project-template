"use server";

import { API_URL } from "../../constants/api";
import { getErrorMessage } from "../../util/errors";

async function createUser(
    _prevState,
    formData
) {
    console.log("formData", formData)
    const response = await fetch(`${API_URL}/users`, {
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


