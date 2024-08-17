// Define the type for the validation result
interface ValidationResult {
    isValid: boolean;
    message?: string;
}

// Function to validate quantity input
export function validateQuantity(quantity: number): ValidationResult {
    if (!Number.isInteger(quantity) || quantity < 1) {
        return {
            isValid: false,
            message: "Quantity must be a positive integer."
        };
    }
    
    return { isValid: true };
}
