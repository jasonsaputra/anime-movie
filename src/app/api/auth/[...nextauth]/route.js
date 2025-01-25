import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", // Gunakan JWT
      },
      jwt: {
        encryption: true, // Aktifkan enkripsi
      },
}   

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }