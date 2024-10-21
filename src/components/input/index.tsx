import { useEffect, useRef, useState } from "react";

export default function Input({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    
    // Ajustement automatique de la hauteur du textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';  // Réinitialiser la hauteur
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;  // Ajuster la hauteur en fonction du contenu
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            placeholder="Entrez une tâche"
            className="text-3xl bg-gray-300 text-gray-900 border border-gray-300 p-2 rounded w-full resize-none focus:outline-none focus:ring focus:ring-gray-400 transition duration-200  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 hover:scrollbar-thumb-gray-700 "
            value={value}
            onChange={onChange}
            aria-label="Tâche"
        />
    );
}
