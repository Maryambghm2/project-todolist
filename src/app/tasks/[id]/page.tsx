'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import { Tasks } from "@/components/Tasks";
import { useTasks } from "@/hooks/useTasks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskDetailsPage() {
    const { id } = useParams();
    const { fetchTaskById, updateTask } = useTasks();
    const [task, setTask] = useState<Tasks | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTask = async () => {
            if (id) {
                try {
                    const fetchedTask = await fetchTaskById(Number(id));
                    setTask(fetchedTask);
                    setUpdatedContent(fetchedTask.content);
                    setLoading(false);
                } catch (error) {
                    setError("Erreur lors de la récupération de la tâche");
                    setLoading(false);
                }
            }
        };
        loadTask();
    }, [id]);

    const handleUpdate = () => {
        if (task) {
            updateTask(task.id, updatedContent);
            setIsEditing(false);
        }
    }

    if (loading) return <p className="text-center mt-5">Chargement...</p>;
    if (error) return <p className="text-red-500 text-center mt-5">Erreur: {error}</p>;
    if (!task) return <p className="text-center mt-5">Tâche non trouvée</p>;

    return (
        <main className="font-agdasima">
            <header className="m-10">
                <Button label="Retour" onClick={() => window.history.back()} />
            </header>
            <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-transparent">
                <div className="flex flex-row mb-8 justify-between items-center gap-10">
                    <h2 className="text-l font-bold text-gray-600">Détail de la Tâche :</h2>
                    <h3 className="text-lg font-bold text-gray-600">{new Date(task.created_at).toLocaleDateString()}</h3>
                </div>
                {isEditing ? (
                    <Input value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} />
                ) : (
                    <p className="mb-4  text-gray-800 text-3xl">{task.content}</p>
                )}
                <div className="flex justify-end mt-4">
                    {isEditing ? (
                        <Button label="Sauvegarder" onClick={handleUpdate} />
                    ) : (
                        <Button label="Modifier" onClick={() => setIsEditing(true)} />
                    )}
                </div>
            </div>
        </main>
    )
}
