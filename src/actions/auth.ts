"use server"; 

import { prisma } from "@/lib/prisma";

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const cpf = formData.get("cpf") as string;
  const course = formData.get("course") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password || !cpf) {
    return { error: "Preencha todos os campos obrigatórios." };
  }

  try {
    // Verifica se o e-mail já existe para não dar erro feio do banco
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "Este e-mail já está cadastrado em nossa alcateia." };
    }

    // Salva o usuário
    await prisma.user.create({
      data: { name, cpf, course, email, password },
    });

    // Retorna sucesso para o Front-end
    return { success: true };
    
  } catch (error) {
    console.log("Erro ao cadastrar no banco:", error);
    return { error: "Ocorreu um erro interno. Tente novamente." };
  }
}