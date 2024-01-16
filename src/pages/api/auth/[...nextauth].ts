import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  email: string;
  password: string;
}

const users: User[] = [
  { id: "12", email: "mdasik0@gmail.com", password: "helloWorld" },
  { id: "02", email: "amazon@gmail.com", password: "00001111" },
];

const authOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: { email: string; password: string }) {
        const { email, password } = credentials;

        //TODO: best case scenario should be adding a fetch request where we will get the user directly from the server
        // After adding the backend remove all the conditions.

        const user = users.find((u) => u.email === email);

        if (!user) {
          console.log("No user found");
          return;
        }

        if (user.password !== password) {
          console.log("Password didn't matched");
          return;
        }

        console.log("user = ", user);
        return user;
      },
    }),
  ],
  session: {
    jwt: true, // Use JWT for session storage
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
