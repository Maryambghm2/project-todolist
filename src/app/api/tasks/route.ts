import { NextRequest, NextResponse } from "next/server";
import query from "../db";

// ROUTE TOUTES TASKS 
export async function GET() {
    try {
        const queryReq: string = 'SELECT * FROM tasks'
        const queryParams: any[] = [];

        const result = await query(queryReq, queryParams);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        return NextResponse.json({ error: 'Erreur serveur' }, {status: 500});
    }
};


// ROUTE POST NEW TASK 
export async function POST(req: NextRequest) {

    try {

        const { content } = await req.json();
        if (!content|| content.trim() === '') {
            return NextResponse.json({ error: 'La tâche est requise' }, {status:400});
        }
        const queryReq: string = 'INSERT INTO tasks (content, completed, created_at) VALUES ($1, $2, NOW()) RETURNING *';
        const queryParams: any[] = [content, false];
        const result = await query(queryReq, queryParams);

        return NextResponse.json({ message: "Tâche crée avec succès", task: result.rows[0] }, {status:201});
    }
    catch (error) {
        console.error('Erreur lors de la création de la tâche :', error);
        return NextResponse.json({ error: 'Erreur serveur' }, {status:500});
    }
}