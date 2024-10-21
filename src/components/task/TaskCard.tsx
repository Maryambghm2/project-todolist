import { useState } from "react";
import Button from "../button";
import { TaskCardProps } from "../Tasks";
import Input from "../input";
import Checkbox from "../checkbox";
import Link from "next/link";

export default function TaskCard({ task, onDelete, onUpdate, onToggleComplete }: TaskCardProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdateContent] = useState(task.content)

    // FONCTION QUI GERE LA VALIDATION DE LA MODIFICATION DE LA TACHE 
    const handleUpdate = () => {
        onUpdate(task.id, updatedContent);
        setIsEditing(false)
    }

    return (
        <>
            <li className="flex justify-between items-center border p-2 rounded mb-4">
                <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id, !task.completed)} />

                <Link href={`/tasks/${task.id}`}>
                    <span className="text-black font-semibold font-agdasima" onDoubleClick={() => setIsEditing(true)}>{task.content}</span> </Link>

                <Button onClick={() => onDelete(task.id)} label='' icon="trash" type="button" />
            </li>
        </>
    );
}
