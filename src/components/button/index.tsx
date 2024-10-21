import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
    onClick?: () => void;
    label: string;
    type?: "button" | "submit" | "reset";
    icon?: string;
}

export default function Button({ onClick, label, type = "button", icon }: ButtonProps) {
    return (
        <button
            className="bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 text-white p-2 rounded w-30 transition duration-300"
            onClick={onClick}
            type={type}
            aria-label={label}

        >  {icon && <FontAwesomeIcon icon={faTrash} />}
            {label}
        </button>
    );
}


// className="bg-red-500 text-white p-2 rounded"