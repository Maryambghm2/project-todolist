export interface Tasks {
  id: number;
  content: string;
  completed: boolean;
  created_at: Date;
}
export interface TaskCardProps {
  task: { id: number; content: string; completed: boolean };
  onDelete: (id: number) => void;
  onUpdate: (id: number, content: string) => void;
  onToggleComplete: (id: number, completed: boolean) => void;
}

export interface TaskFormProps {
  onAddTask: (task: Omit<Tasks, 'id'>) => void;
}

export interface TaskListProps {
  tasks: Tasks[]; // Définit le type pour la prop tasks
  onDeleteTask: (id: number) => void; // Définit le type pour la prop onDeleteTask
  onUpdateTask: (id: number, content: string) => void;
  onToggleComplete: (id: number, completed: boolean) => void;

}