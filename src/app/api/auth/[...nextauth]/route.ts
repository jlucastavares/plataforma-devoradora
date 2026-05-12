import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  // Configurando os provedores de login (Nesse caso, E-mail e Senha)
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      // A função que valida o login
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Dados inválidos");
        }

        // Busca o usuário no banco de dados pelo e-mail
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        // Verifica se o usuário existe e se a senha bate
        // (Nota: Em um app real, usaríamos bcrypt para comparar senhas criptografadas)
        if (!user || user.password !== credentials.password) {
          throw new Error("E-mail ou senha incorretos");
        }

        // Se deu tudo certo, devolve o usuário para o NextAuth criar a sessão!
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
    })
  ],
  // Dizendo ao NextAuth qual é a nossa página de login customizada
  pages: {
    signIn: "/login",
  },
  // Estratégia de sessão
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };