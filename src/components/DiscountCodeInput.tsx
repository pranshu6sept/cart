// DiscountCodeInput.tsx
import React, { useState } from 'react';
import { validateDiscountCode } from '../lib/discountcodeValidator';

interface DiscountCodeInputProps {
    onDiscountApply: (discountAmount: number) => void;
}

const DiscountCodeInput: React.FC<DiscountCodeInputProps> = ({ onDiscountApply }) => {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    const handleApply = () => {
        const validationResult = validateDiscountCode(code);

        if (!validationResult.isValid) {
            setError(validationResult.message || "Invalid discount code");
        } else {
            setError("");
            onDiscountApply(validationResult.discountPercentage || 0);
        }
    };

    return (
        <div className='flex flex-row gap-x-2'>
            <label>Discount Code:</label>
            <input
                className='border'
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleApply}>Apply</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default DiscountCodeInput;
