//configuração do google provider + pegando informações do usuário no banco de dados
import NextAuth from "next-auth"
import { authOptions } from "@/app/_lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
