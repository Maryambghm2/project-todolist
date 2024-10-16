// "use client"

// import { useEffect, useState } from "react";
// import { Tasks } from "./Tasks";

// export default function AllTasks() {
//     const [tasks, setTasks] = useState<Tasks[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {

//                 const response = await fetch('http://localhost:3000/api/tasks');
//                 if (!response.ok) throw new Error('Erreur lors du chargement des articles');
//                 const data = await response.json();
//                 setTasks(data);
//                 setLoading(false);

//             } catch (error) {
//                 setLoading(false);
//                 console.log(error);
//             }
//         };
//         fetchTasks();
//     }, [])

//     if (loading) {
//         return <p>Chargement ...</p>
//     }

//     if (error) {
//         return <p>Erreur: {error}</p>
//     }

//     return (
//         <main>
//             <ul className="tasks">
//                 {tasks.map(task => (
//                     <li className="task" key={task.id}>
//                         {/* <h5>Date : {task.created_at}</h5> */}
//                         {task.content}
//                     </li>
//                 ))
//                 }
//             </ul>
//         </main>
//     )
// }