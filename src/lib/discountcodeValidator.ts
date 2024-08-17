interface DiscountDetails {
    discountPercentage: number;
    expires: Date;
}

interface DiscountCodeValidationResult {
    isValid: boolean;
    discountPercentage?: number;
    message?: string;
}

// Simulate a database of valid discount codes
const validDiscountCodes: Record<string, DiscountDetails> = {
    "SAVE10": { discountPercentage: 10, expires: new Date("2024-12-31") },
    "WELCOME5": { discountPercentage: 5, expires: new Date("2025-01-01") }
};

export function validateDiscountCode(code: string): DiscountCodeValidationResult {
    const discount = validDiscountCodes[code as keyof typeof validDiscountCodes];

    if (!discount) {
        return {
            isValid: false,
            message: "Invalid discount code."
        };
    }

    if (discount.expires < new Date()) {
        return {
            isValid: false,
            message: "Discount code has expired."
        };
    }

    return {
        isValid: true,
        discountPercentage: discount.discountPercentage
    };
}
