
export const getErrorMessage = (response) => {
    if (response.message) {
        if (Array.isArray(response.message)) {
            return formatErrorMessages(response.message[0]);
        }
        return formatErrorMessages(response.message);
    }
    

    return "Unknown error occurred. Please try again.";
};
    
const formatErrorMessages = (message) => {
    return message.charAt(0).toUpperCase() + message.slice(1).replace(/_/g, " ");
};