import { useState } from "react";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <div onClick={handleCheckboxChange} tabIndex={0} className={`w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded-full cursor-pointer transition duration-200 ease-in-out ${isChecked ? 'bg-gray-300' : 'bg-transparent'}`}>
            {isChecked && <div className="w-4 h-4 bg-gray-700 rounded-full" />}
        </div>
    );
};

export default Checkbox;
