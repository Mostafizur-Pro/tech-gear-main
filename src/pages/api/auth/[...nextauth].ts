import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

interface UserData {
  email: string;
  name?: string;
  _id: string;
  role: string;
  phone?: string;
  image?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

const authOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: { email: string; password: string }) {
        const { email, password } = credentials;

        try {
          const response = await fetch("https://techgear-server.vercel.app/api/v1/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
          });

          const data = await response.json();

          if (data.success) {

            const response = await fetch("https://techgear-server.vercel.app/api/v1/users/")
            const allUsers = await response.json();
            const user = (allUsers.data as UserData[]).find((u) => u.email === email);
            return user;
            // console.log({...user, accessToken : data.data.accessToken});
            // return {...user, accessToken : data.data.accessToken};

          } else {
            throw new Error(data.message || "Authentication failed");
          }
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
