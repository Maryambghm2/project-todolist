export interface Tasks {
    id: number;
    content: string;
    completed: boolean;
    created_at: Date;
}

// interface Task {
//     id: number;
//     task: string;
//   }

  export interface TaskCardProps {
    task: { id: number; content: string };
    onDelete: (id: number) => void;
}


export interface TaskFormProps {
  onAddTask: (task: Omit<Tasks, 'id'>) => void; 
}


export interface TaskListProps {
  tasks: Tasks[]; // Définit le type pour la prop tasks
  onDeleteTask: (id: number) => void; // Définit le type pour la prop onDeleteTask
}