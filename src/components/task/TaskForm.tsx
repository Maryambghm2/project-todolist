import { useState } from "react";
import Input from "../input";
import Button from "../button";
import { TaskFormProps } from "../Tasks";


export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [newTaskContent, setNewTaskContent] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (newTaskContent.trim()) {
            const newTask = {
                content: newTaskContent,
                completed: false,  
                created_at: new Date(),
            };
            onAddTask(newTask); 
            setNewTaskContent("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="flex flex-col gap-2">
                <Input value={newTaskContent} onChange={(e) => setNewTaskContent(e.target.value)} />
                <Button type="submit" label='Ajouter' />
            </div>
        </form>
    );
}
