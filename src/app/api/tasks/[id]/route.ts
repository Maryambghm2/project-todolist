import { NextRequest, NextResponse } from "next/server";
import query from "../../db";

// ROUTE TASK [ID]
export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    const id = params.id;

    try {
        const queryReq: string = 'SELECT * from tasks WHERE id = $1';
        const queryParams: any[] = [id];

        const result = await query(queryReq, queryParams);
        if (result.rowCount === 0) {
            return NextResponse.json({ error: `Tâche à l'id ${id} non trouvée` }, { status: 404 });
        } else {
            return NextResponse.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de la tâche :', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}

// ROUTE PUT MAJ TASK 
export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
    const id = params.id;
    const { content, completed } = await req.json();

    if (!content && typeof completed !== 'boolean') {
        return NextResponse.json({ error: 'Veuillez fournir une tâche (content) ou un statut "completed" valide.' }, { status: 400 });
    } else if (content == '') {
        return NextResponse.json({ error: 'La tâche ne peut pas être une chaîne vide.' }, { status: 400 });
    }
    try {
        const fieldsToUpdate: string[] = [];
        const queryParams: any[] = [];

        if (content) {
            fieldsToUpdate.push('content = $' + (queryParams.length + 1));
            queryParams.push(content);
        }

        if (typeof completed === 'boolean') {
            fieldsToUpdate.push('completed = $' + (queryParams.length + 1));
            queryParams.push(completed);
        }

        const queryReq: string = `UPDATE tasks SET ${fieldsToUpdate.join(', ')} WHERE id = $${queryParams.length + 1} RETURNING *`;
        queryParams.push(id);

        const result = await query(queryReq, queryParams);
        if (result.rowCount === 0) {
            return NextResponse.json({ error: `Tâche avec l'ID ${id} non trouvée` }, { status: 404 });
        } else {
            return NextResponse.json({ message: `Tâche avec l'ID ${id} mise à jour avec succès`, task: result.rows[0] }, { status: 200 });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la tâche :', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }

}

// ROUTE DELETE TASK 

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
    const id = params.id;
    try {
        const queryReq: string = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
        const queryParams: any[] = [id];

        const result = await query(queryReq, queryParams);

        if (result.rowCount === 0) {
            return NextResponse.json({ error: `Tâche avec l'ID ${id} non trouvée` }, { status: 404 });
        } else {
            return NextResponse.json({ message: `Tâche avec l'ID ${id} supprimée avec succès` }, { status: 200 });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de la tâche :', error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }

}

