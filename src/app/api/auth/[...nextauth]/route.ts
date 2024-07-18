import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        documentNumber: {
          label: "documentNumber",
          type: "text",
          placeholder: "75061978",
        },
        
        idCorporation: {
          label: "password",
          type: "text",
          placeholder: "************",
        },
        password: {
          label: "password",
          type: "text",
          placeholder: "************",
        },
      },

      async authorize(credentials) {
        const { documentNumber, password,idCorporation } = credentials as any;
        const res = await fetch(
          "http://localhost:3000/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              documentNumber,password,idCorporation
              
            }),
          }
        );
        const user: any | any = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };