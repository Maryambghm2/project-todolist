
interface ButtonProps {
    onClick?: () => void;
    label: string;
    type?: "button" | "submit" | "reset";  // Permet de spécifier différents types
}

export default function Button({ onClick, label, type = "button" }: ButtonProps) {
    return (
        <button
            className="bg-gray-500 text-white p-2 rounded w-44"
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}


// className="bg-red-500 text-white p-2 rounded"