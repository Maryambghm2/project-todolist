import { NextRequest, NextResponse } from "next/server";
import query from "./db";
import { NextApiRequest, NextApiResponse } from "next";


// CHEMINS 

// CHEMIN DE BASE ROOT :
export async function GET() {
    return NextResponse.json({ message: "Bienvenue sur l'API ToDoList" });
}
