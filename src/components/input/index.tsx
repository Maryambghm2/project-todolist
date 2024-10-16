export default function Input({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input 
            type="text" 
            placeholder="Entrez une tâche" 
            className="text-gray-900 border p-2 rounded w-60" 
            value={value} 
            onChange={onChange} 
        />
    );
}
