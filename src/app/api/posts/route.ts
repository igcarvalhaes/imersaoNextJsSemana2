import { NextResponse } from "next/server"; // Importando NextResponse para manipular respostas

// Definindo o tipo de um Post para usar TypeScript
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=2"
    );

    if (!response.ok) {
      throw new Error("Falha ao buscar dados da JSONPlaceholder");
    }

    const posts: Post[] = await response.json(); // Parse do JSON recebido
    return NextResponse.json(posts); // Retorna os posts como JSON
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
